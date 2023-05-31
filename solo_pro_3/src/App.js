
import './App.css';
import Navigbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navigbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
