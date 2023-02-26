import './App.css';
import Layout from './components/Layout';
import Hero from './scenes/Hero';
import About from './scenes/About';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Hero />
        <About />
      </Layout>
      {/** <Gallery /> */}
      {/** <Contact /> */}
    </div>
  );
};

export default App;