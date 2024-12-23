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
      <Divider />
      <Contact />
      <Footer />

    </>
  );
};
const Divider: React.FC = () => (
  <div
    style={{
      height: '2px',
      background: 'linear-gradient(to right, #007bff, transparent)',
      margin: '40px 0',
    }}
  ></div>
);

export default App;
