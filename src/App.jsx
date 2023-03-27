import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './scenes/Hero';
import About from './scenes/About';
import Experience from './scenes/Experience';
import Tech from './scenes/Tech';
import Work from './scenes/Work';
import Feedback from './scenes/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <div className="relative z-0 flex flex-col justify-center items-center">
          <Feedback />
          <Contact />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
