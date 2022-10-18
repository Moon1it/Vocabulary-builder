import * as React from 'react';
import { Link } from 'react-router-dom';

import '../Main/Main.css';

interface TrackerData {
   id: number;
   content: string;
}

interface PostsData {
   id: number;
   name: string;
   countWords: number;
}

const Main: React.FC = () => {
   const trackerData: Array<TrackerData> = [
      { id: 1, content: 'coming soon..' },
   ];

   const postsData: Array<PostsData> = [
      { id: 1, name: 'Unit 1', countWords: 5 },
      { id: 2, name: 'Unit 2', countWords: 12 },
      { id: 3, name: 'Unit 3', countWords: 31 },
      { id: 4, name: 'Unit 4', countWords: 45 },
      { id: 5, name: 'Unit 5', countWords: 66 },
      { id: 6, name: 'Unit 6', countWords: 75 },
      { id: 7, name: 'Unit 7', countWords: 88 },
      { id: 8, name: 'Unit 8', countWords: 94 },
   ];

   return (
      <div className='Main'>
         <div className='Main-tracker'>
            <h1>Your tasks</h1>
            <div className='Main-tracker-div'>
               {trackerData.map((element) => {
                  return (
                     <>
                        <div key={element.id}>
                           <h3>{element.content}</h3>
                        </div>
                     </>
                  );
               })}
            </div>
         </div>
         <div className='Main-sets'>
            <h1>Recent study sets</h1>
            <div className='Main-sets-container'>
               <Link to={'#'} />
               {postsData.map((element, index) => {
                  return (
                     <>
                        <Link
                           to={'../terms'}
                           className={index < 5 ? 'div-blue' : 'div-green'}
                           key={element.id}
                        >
                           <h1>{element.name}</h1>
                           <h3>{element.countWords} items</h3>
                        </Link>
                     </>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Main;
