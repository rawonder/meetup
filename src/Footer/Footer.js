import React from 'react';
import '../App.css';
import facebook from './img/facebook.svg'
import twit from './img/twitter.svg'
import insta from './img/insta.svg'
import tube from './img/youtube.svg'
function Footer() {
  return (
    <div className="App-wrapper">
    <footer>
      <div className="footer">
      <p>
        Do more of what you love
      </p>
      <div className="links">
      <a href="https://www.meetup.com/find/?source=EVENTS" className="">Find an event</a>
      <a href="https://www.meetup.com/en-AU/start/?origin=students">Start a group</a>
      <a href="https://www.meetup.com/apps/">Get the app</a></div>
      </div>
      <div className="registration">
        <a href="https://www.meetup.com/register/">Sign up</a>
        <a href="https://www.meetup.com/login/">Log In</a>
        <a href="https://www.meetup.com/en-us/help/">Help</a>
      </div>
      <div className="line"></div>
      <div className="registration">
        <a href="https://www.meetup.com/ru-RU/about/">About</a>
        <a href="https://www.meetup.com/blog/?_ga=2.165765694.14096422.1649589865-1003530523.1649589865&_gac=1.148315589.1649658290.Cj0KCQjwgMqSBhDCARIsAIIVN1W4XMNgftjin68Z2KfhiYTPZbKQSqKw9c5ZXYfl9EOTd3r4VJj2ssAaAth7EALw_wcB">Blog</a>
        <a href="https://www.meetup.com/ru-RU/careers/">Careers</a>
      </div>
      <div className="social">
        <h1>Follow us</h1>
        <div className="socials">
          <a href="https://www.facebook.com/meetup/"><img src={facebook} alt="" /></a>
          <a href="https://twitter.com/Meetup/"><img src={twit} alt="" /></a>
          <a href="https://www.instagram.com/meetup/"><img src={insta} alt="" /></a>
          <a href="https://www.youtube.com/meetup"><img src={tube} alt="" /></a>
        </div>
      </div>
    </footer>
     </div>
  );
}

export default Footer;
