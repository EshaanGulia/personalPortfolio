import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
