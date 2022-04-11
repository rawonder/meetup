import React from 'react';
import './App.css';
import Main from './Main/Main';
import Content from './Content/Content';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App-wrapper">
     <Main/>
     <Content/>
    <Connect/>
    <Footer/>
     </div>
  );
}

export default App;
