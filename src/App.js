
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import About from './Components/About';
import { Fragment } from 'react';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Home from './Components/Home';
import Contact from './Components/Contact';
function App() {
  return (
    <Fragment>
    <div className="container-fluids">
    <div className="container"> 
    <Header />
    <Home />
    </div>
    </div>
     <About /> 
    <Skill /> 
    <Project />
    <Contact />

    </Fragment>
  );
}

export default App;
