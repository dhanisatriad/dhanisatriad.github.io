import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import thumbnail1 from '../../assets/images/1.png'
import thumbnail2 from '../../assets/images/2.png'
import thumbnail3 from '../../assets/images/3.png'
import thumbnail4 from '../../assets/images/4.png'
import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCircleChevronRight,
//   faCircleChevronLeft,
// } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const cardData = [
    {
      id: 1,
      title: 'Laboratorium',
      text: 'https://github.com/dhanisatriad/web-laboratorium',
      listItems: [
        'Item Management',
        'Laboratorium Management',
        'Account Management',
        'ID QR Generator',
        'QR Reader',
        'Borrow Item Online',
        'Permit Generator',
        'Mail Notification',
      ],
      imageUrl: thumbnail1, // Update with your actual image path
    },
    {
      id: 2,
      title: 'Web Desa',
      text: 'https://github.com/dhanisatriad/web-desa',
      listItems: [
        'Manage Profil Desa',
        'Login',
        'Manage Kabar Desa',
        'Manage Perangkat Desa',
        'Galeri',
      ],
      imageUrl: thumbnail2, // Update with your actual image path
    },
    {
      id: 3,
      title: 'Learn REST API',
      text: 'https://github.com/dhanisatriad/learn-rest-api',
      listItems: ['CRUD'],
      imageUrl: thumbnail3, // Update with your actual image path
    },
    {
      id: 4,
      title: 'Portfolio',
      text: 'https://github.com/dhanisatriad/dhanisatriad.github.io',
      listItems: ['Portfolio'],
      imageUrl: thumbnail4, // Update with your actual image path
    },
  ]

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          {/* <div>
          
        <input type="radio"  name='nasi'checked="true"></input>
        <label for='1'>1</label>
        <input type="radio"  name='nasi' checked="false"></input>
        <label for='2'>2</label>
        <input type="radio"  name='nasi'checked="true"></input>
        <label for='3'>3</label>
        <input type="radio"  name='nasi'checked="true"></input>
        <label for='4'>4</label>
        </div> */}
          <div className="wrapper">
            <div className="containerb">
              {cardData.map((card, index) => (
                <React.Fragment key={card.id}>
                  <input
                    type="radio"
                    name="slide"
                    id={`c${card.id}`}
                    defaultChecked={index === 0}
                  />
                  <label htmlFor={`c${card.id}`} className="card">
                    <img
                      className="card-img"
                      src={card.imageUrl}
                      alt={`Thumbnail ${card.id}`}
                    />
                    <div className="row">
                      <div className="icon">{card.id}</div>
                      <div className="description">
                        <div className="sec1">
                          <a href={card.text} target="blank" rel="noreferrer">
                          <h4>{card.title}</h4>
                          </a>
                        </div>
                        <div className="sec2">
                          {/* <ul> */}
                            {card.listItems.map((item, itemIndex) => (
                              <h5 key={itemIndex}>{item}</h5>
                            ))}
                          {/* </ul> */}
                        </div>
                      </div>
                    </div>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default Portfolio
