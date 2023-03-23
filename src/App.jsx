import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './scenes/Hero';
import About from './scenes/About';
import Experience from './scenes/Experience';

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
        {/*<Tech />*/}
        {/*<Works />*/}
        {/*<Feedbacks />*/}
        <div className="relative z-0">
          {/*<Contact />*/}
          {/*<StarsCanvas />*/}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
