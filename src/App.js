import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects, Contact, Home, Collaborate, About, Support } from './pages'
import './App.css'
import React, { useCallback } from 'react'
import { faTwitter, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

library.add(faTwitter, faGithub, faLinkedin, faWhatsapp)

function App () {
  const loadParticles = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])
  return (
    <div className="App  bg-gray-300 dark:bg-gray-800 sm:text-base p-2 particles-js" id='tsparticles w-100'>
      <Particles
      id='tsparticles'
      init={loadParticles}
      loaded={particlesLoaded}

      className=''

      options = {{
        particles: {
          number: {
            value: 80,
            'z-index': -10,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 4
            }
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 30,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 500,
              size: 30,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}

      />
      <div className='z-100 relative'>
      <Header />
      <Home />
      <About />
      <Projects />
      <div className='flex flex-wrap justify-around items-start m-10'>
        <Experience />
        <Education />
      </div>
      <div className='flex flex-wrap justify-around m-5  bg-gray-200 dark:bg-gray-900 rounded-md p-1 md:p-2 shadow'>
        <Collaborate />
        <Contact />
      </div>
      <Support />
      <hr className="h-px m-3 bg-gray-700 border-0 dark:bg-gray-400 mb-5 sm:mb-10 md:mb-15" />
      <Footer />
      </div>
    </div>
  )
}

export default App
