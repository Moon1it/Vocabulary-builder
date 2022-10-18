const Eerrorr = require('../exceptions/api-error');
const tokenS = require('../service/token-service');
module.exports = function (req: any, res: any, next: any) {
   try {
      const authorizationHeader = req.headers.authorization;
      console.log('authorizationHeader', authorizationHeader, '\n\n');
      if (!authorizationHeader) {
         return next(Eerrorr.UnauthorizedError());
      }

      const accessToken = authorizationHeader.split(' ')[1];
      console.log('accessToken', accessToken, '\n\n');
      if (!accessToken) {
         return next(Eerrorr.UnauthorizedError());
      }

      const userData = tokenS.validateAccessToken(accessToken);
      console.log('userData', userData, '\n\n');
      if (!userData) {
         return next(Eerrorr.UnauthorizedError());
      }

      req.user = userData;
      next();
   } catch (e) {
      return next(Eerrorr.UnauthorizedError());
   }
};
