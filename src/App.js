import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export function Home() {
  return(
    <div className="block">

    </div>
  )
}

export default App;
