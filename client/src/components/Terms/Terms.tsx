import React, { useState } from 'react';
import '../Terms/Terms.css';
import TermsItem from './TermsItem';

const Terms: React.FC = () => {
   const [terms, setTerms] = useState<JSX.Element[]>([]);
   return (
      <div className='Terms'>
         <div className='study-modes'>
            <div className='study-modes-setName'>
               <h2>Unit 1</h2>
               <h3>(14 terms)</h3>
            </div>
            <div className='study-modes-buttons'>
               <button>Flashcards</button>
               <button>Matching</button>
               <button>Writing</button>
            </div>
         </div>
         <div
            className='add-term'
            onClick={() => {
               setTerms([...terms, <TermsItem />]);
            }}
         ></div>
         {terms.map((term) => {
            return term;
         })}
      </div>
   );
};

export default Terms;
