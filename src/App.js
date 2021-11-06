import React , { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';


function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </section>
    
  );
}

export default App;
