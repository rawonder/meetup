import React from 'react';
import '../App.css';
import first from './img/1.1.jpg'
import second from './img/1.2.jpg'
import third from './img/1.3.jpg'
import fourth from './img/1.4.jpg'
function Content() {
  return (
    <div className="App-wrapper">
     <div className="main-2">
       <h1>Bring people together with Meetup</h1>
        <p className='text'>It’s easy to quickly make new friends, gather around the topics or hobbies you love, build your</p>
        <p className='text'>professional network, or just have some fun.</p>
        <div className="brings">
          <div>
            <img src={first} alt="" />
            <h2>Friendships that last</h2>
            <p>Find new friends at any age. Start a group for happy hours, singles, support, dining out, and more!</p>
          </div>
          <div>
            <img src={second} alt="" />
            <h2>Build healthy habits</h2>
            <p>Yoga, meditation, outdoor activities, fitness, and sports groups are always in high demand. Create a group and share what you know.</p>
          </div>
          <div>
            <img src={third} alt="" />
            <h2>Make your career move</h2>
            <p>Whether you’re interested in real estate and cryptocurrency or entrepreneurship and business development, you can share your expertise or simply grow on Meetup.</p>
          </div>
          <div>
            <img src={fourth} alt="" />
            <h2>Share your interests</h2>
            <p>Meet people who share your love for art, crafts, writing, dancing, photography, language, or music. Teach lessons or start a culture exchange when you create a group.</p>
          </div>
        </div>
        <button>Start a group</button>
        <iframe  src="https://www.youtube.com/embed/Hk8b32vjbL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
  );
}

export default Content;
