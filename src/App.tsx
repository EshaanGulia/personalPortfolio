import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
