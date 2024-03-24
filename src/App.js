import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects, Contact, Home, Collaborate, About, Support } from './pages';
import './App.css';
import React from 'react';
import { faTwitter, faGithub, faLinkedin, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTwitter, faGithub, faLinkedin, faWhatsapp)


function App() {
  return (
    <div className="App  bg-gray-200 dark:bg-gray-800 sm:text-base p-2 particles-js" id='tsparticles w-100'>
      <Header />
      <Home />
      <About />
      <Projects />
      <div className='flex flex-wrap justify-around items-start m-10'>
        <Experience />
        <Education />
      </div>
      <div className='flex flex-wrap justify-around m-5  bg-gray-200 dark:bg-gray-900 rounded-md p-1 md:p-2'>
        <Collaborate />
        <Contact />
      </div>
      <Support />
      <hr className="h-px m-3 bg-gray-700 border-0 dark:bg-gray-400 mb-5 sm:mb-10 md:mb-15" />
      <Footer />
    </div>
  );
}

export default App;
