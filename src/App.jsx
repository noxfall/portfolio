import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './scenes/Hero';
import About from './scenes/About';
import Experience from './scenes/Experience';
import Tech from './scenes/Tech';
import Work from './scenes/Work';
import Feedback from './scenes/Feedback';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <Feedback />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
