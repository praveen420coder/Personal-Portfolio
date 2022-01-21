import dotenv from 'dotenv';
import React from 'react';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';

import Topbar from './components/topbar/Topbar';

import "./app.scss"
import {useState} from 'react';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';
dotenv.config();
 

function App() {

  const SERVICEID = process.env.REACT_APP_SERVICEID;
  const TEMPLATEID = process.env.REACT_APP_TEMPLATEID;
  const USERID = process.env.REACT_APP_USERID;

  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>

        <Contact id={SERVICEID} tem = {TEMPLATEID} user= { USERID} />
      </div>
    </div>
  );
}

export default App;
