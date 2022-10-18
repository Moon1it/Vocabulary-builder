import * as React from 'react';
import '../Terms/Terms.css';

const TermsItem: React.FC = () => {
   return (
      <div className='show-terms'>
         <div className='show-terms-text'>
            <div className='show-terms-text-div'>
               <h1>Unique</h1>
               <div className='show-terms-icon'></div>
            </div>
            <div className='show-terms-div-definition'>
               <div className='show-terms-div-definition-div'>
                  <p>
                     <strong>
                        if something is unique, there is only one of it
                     </strong>
                  </p>
               </div>
               <div className='show-terms-div-definition-div'>
                  <p>уникальный</p>
               </div>
               <div className='show-terms-div-definition-div'>
                  <p className='lastP'>
                     <em>
                        I met a lot of interesting and unique people. <br />
                        She only made on ring like this, so it's unique.
                     </em>
                  </p>
               </div>
            </div>
         </div>
         <div className='show-terms-img'></div>
      </div>
   );
};

export default TermsItem;
