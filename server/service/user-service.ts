const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const apiError = require('../exceptions/api-error');

class UserService {
   async registration(email: string, password: string) {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
         throw apiError.BadRequest(
            `Пользователь с почтовым адресом ${email} уже существует`
         );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

      const user = await UserModel.create({
         email,
         password: hashPassword,
         activationLink,
      });

      await mailService.sendActivationMail(
         email,
         `${process.env.API_URL}/api/activate/${activationLink}`
      );

      const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
   }

   async activate(activationLink: string) {
      const user = await UserModel.findOne({ activationLink });
      if (!user) {
         throw apiError.BadRequest('Неккоректная ссылка активации');
      }
      user.isActivated = true;
      await user.save();
   }

   async login(email: string, password: string) {
      const user = await UserModel.findOne({ email });
      if (!user) {
         throw apiError.BadRequest('Пользователь с таким email не найден');
      }
      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
         throw apiError.BadRequest('Неверный пароль');
      }
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
   }

   async logout(refreshToken: string) {
      const token = await tokenService.removeToken(refreshToken);
      return token;
   }

   async refresh(refreshToken: string) {
      if (!refreshToken) {
         throw apiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
         throw apiError.UnauthorizedError();
      }
      const user = await UserModel.findById(userData.id);
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
   }

   async getUserProfile(email: string) {
      const user = await UserModel.findOne({ email });
      return user;
   }
}

module.exports = new UserService();
