import * as React from 'react';
import '../Header/Header.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { logoutReducer } from '../../store/slices/authSlice';
import { logoutUser } from '../../store/slices/authAction';

interface MenuElement {
   id: number;
   name: string;
   href: string;
}

const Header = () => {
   const menuElements: Array<MenuElement> = [
      {
         id: 1,
         name: 'Home',
         href: 'home',
      },
      {
         id: 2,
         name: 'Library',
         href: 'Library',
      },
      {
         id: 3,
         name: 'Irregular verbs',
         href: 'verbs',
      },
   ];
   const dispatch = useAppDispatch();
   const stateApp = useAppSelector((state: RootState) => state);
   return (
      <>
         <div className='Header'>
            <div className='Header-links'>
               {menuElements.map((element, index) => {
                  return (
                     <>
                        <NavLink
                           key={element.id}
                           // onClick={(e) => selectItem(e)}
                           style={({ isActive }) =>
                              isActive
                                 ? {
                                      background: '#f49f0a',
                                      color: '#fff',
                                   }
                                 : {
                                      color: '#000',
                                   }
                           }
                           to={element.href}
                        >
                           {element.name}
                        </NavLink>
                     </>
                  );
               })}
            </div>
            <div className='Header-personalAccount'>
               <NavLink
                  style={({ isActive }) =>
                     isActive
                        ? {
                             background: '#f49f0a',
                             color: '#fff',
                          }
                        : {
                             color: '#000',
                          }
                  }
                  to={'user'}
               >
                  User name
               </NavLink>

               <Link
                  className='Header-personalAccount-image'
                  onClick={async () => await dispatch(logoutUser())}
                  to={'/auth'}
               ></Link>
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default Header;
