import * as React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import '../User/User.css';

const User: React.FC = () => {
   const stateApp = useAppSelector((state: RootState) => state);
   return (
      <div className='user'>
         <div className='user-data'>
            <h1>User data</h1>
            <div className='user-data-content'>
               <h3>Name</h3>
               <input name='' placeholder='Set the name' id='' />
               <h3>Email</h3>
               <input
                  name=''
                  placeholder='Set the email'
                  id=''
                  value={stateApp.auth.email}
               />
               <h3>Password</h3>
               <input name='' placeholder='Set the password' id='' />
            </div>
         </div>

         {/* <div className='show-terms'>
        <div className='show-terms-text'>
          <h1>Unique</h1>
          <div className='show-terms-div-definition'>
            <div className='show-terms-div-definition-div'>
              <p className='examplesP'>
                if something is unique, there is only one of it
              </p>
            </div>
            <div className='show-terms-div-definition-div'>
              <p>уникальный</p>
            </div>
            <div className='show-terms-div-definition-div'>
              <p className='lastP'>
                I met a lot of interesting and unique people. <br />
                She only made on ring like this, so it's unique.
              </p>
            </div>
          </div>
        </div>
        <div className='show-terms-img'></div>
      </div> */}
      </div>
   );
};

export default User;
