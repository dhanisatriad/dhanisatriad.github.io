import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p id='nasi'>
            Greetings! I'm Dhani Satria Dharma, an enthusiastic web developer
            with a keen eye for crafting seamless digital experiences. My
            expertise lies in Full-Stack development. Currently, I am well-versed
            in Laravel for efficient back-end development, bringing robust and
            scalable solutions to life. 
          </p>
          <p>
            Additionally, I am currently expanding my skill set by delving into
            the world of front-end development. I'm actively learning React and
            Vue.js, aiming to integrate these powerful frameworks into my
            toolkit for creating interactive and dynamic user interfaces.
          </p>
          <p align="LEFT">
            I'm driven by the pursuit of delivering cutting-edge, user-centric
            web applications. Let's turn ideas into reality and create
            meaningful impact together in the dynamic world of web development!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLaravel} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faBootstrap} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default About
