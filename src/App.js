import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'

//content
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skill from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
        <Route exact path="/skills">
          <Skill/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
