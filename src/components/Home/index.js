import { Link } from 'react-router-dom'
import logoTitle from '../../assets/images/logo-d.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import React from 'react';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'a', 'n', 'i']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

//   setTimeout(() => {
//     console.log('Hello, World!')
//   }, 3000);
useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <p className='home-tags'>&lt;h1&gt;</p>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2>Laravel / PHP / JavaScript / HTML / CSS / Bootstrap</h2>
        <p className='home-tags'>&lt;/h1&gt;</p>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      {/* <Logo/> */}
    </div>
    <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Home
