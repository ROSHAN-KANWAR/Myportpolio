
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import About from './Components/About';
import { Fragment } from 'react';
import Skill from './Components/Skill';
import Project from './Components/Project';

import Contact from './Components/Contact';
function App() {
  return (
    <Fragment>
    <div className="">
     <Header />
    </div>
    <div className='mb-5'>
    <About />
    </div>
    <div className=''>
    <Skill />
    </div>
    <div className='mb-4'>
    <Project />
    </div>
    <div className=''>
    <Contact />
    </div>
    </Fragment>
  );
}

export default App;
