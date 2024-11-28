import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from './components/TopNavigation';
import BootStrapCarousel from './components/BootstrapCarousel';
import Portfolio from './components/Portfolio';
import Contact from './components/contactPage/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; // Import custom CSS for layout adjustments
import Project1 from './components/projects/Project1';
import CoffeeGuy from './components/projects/CoffeeGuy';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <TopNavigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<BootStrapCarousel />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/The Boys' element={<Project1 />} />
            <Route path='/portfolio/Coffee Guy' element={<CoffeeGuy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
