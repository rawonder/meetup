import React from 'react';
import '../App.css';
import meetupImg from './img/meetup-img.png'
import imageMeetup from './img/image-meetup.jpg'
import one from './img/1.png'
import two from './img/2.png'
import three from './img/3.png'
import four from './img/4.png'
function Main() {
  return (
      <main>
        <div className="main">
          <div className="box-1">
            <img src={meetupImg} alt="" />
            <h1>20 years of real connections—for <span>interests</span> that last</h1>
            <p>Your new community is waiting for you. For 20 years, millions of people have chosen Meetup to make real connections over the things that matter. Start a group today.</p>
            <button>Start a group</button>
          </div>
          <div className="box-2"><img src={imageMeetup} alt="" /></div>
        </div>
        <h1 className='second-h1'>Meetup makes organizing easy</h1>
        <div className="meetup-tools">
          <div>
            <img src={one} alt="" />
            <h2>Reach New People</h2>
            <p>Connect with people in your area who are curious about the things you love.</p>
            <a href=""><h2>START NOW ▶</h2></a>
          </div>
          <div>
            <img src={two} alt="" />
            <h2>Simple Hosting Tools</h2>
            <p>Chat with attendees, manage attendance, and make updates to your events right from your phone.</p>
            <a href=""><h2>START NOW ▶</h2></a>
          </div>
          <div>
            <img src={three} alt=""/>
            <h2>Host Safe Events</h2>
            <p>Easy-to-use features for indicating whether events will be outdoors, have mask or vaccination requirements, & more.</p>
            <a href=""><h2>START NOW ▶</h2></a>
          </div>
          <div>
            <img src={four} alt=""/>
            <h2>Continuous Growth</h2>
            <p>We’ll keep promoting your group throughout our network so it continues to grow.</p>
            <a href=""><h2>START NOW ▶</h2></a>
          </div>
        </div>
      </main>
  );
}

export default Main;
