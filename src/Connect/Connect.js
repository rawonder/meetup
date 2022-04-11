import React from 'react';
import phoneImg from './img/meetup-phone.png'
function Connect() {
  return (
    <div className="App-wrapper">
     <div className="connect">
       <div className="connect-1">
         <h1>
         Give your network a boost
         </h1>
         <p>
         Connect with thought leaders, peers, and creators in your industry and beyond.
         </p>
         <button>Get Started</button>
       </div>
       <div className="connect-2">
         <img src={phoneImg} alt="" />
       </div>
     </div>
     </div>
  );
}

export default Connect;
