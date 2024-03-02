import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects, Contact, Home, Collaborate, About } from './pages';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App  bg-gray-50 dark:bg-gray-200 sm:text-md p-2">
      <Header />
      <Home />
      <About />
      <Projects />
      <div>
        <Experience />
        <Education />
      </div>
      <Contact />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default App;
