import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import thumbnail1 from '../../assets/images/1.png'
import thumbnail2 from '../../assets/images/2.png'
import thumbnail3 from '../../assets/images/3.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [currentPage, setCurrentPage] = useState(1)

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
        'Id Generator',
        'Mail Notification',
      ],
      imageUrl: thumbnail1, // Update with your actual image path
    },
    {
      id: 2,
      title: 'Web Desa',
      text: 'https://github.com/dhanisatriad/web-laboratorium',
      listItems: [
        'Manage Profil Desa',
        'Login',
        'Manage Kabar Desa',
        'Manage Perangkat Desa',
        'Galeri'
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
  ]

  const itemsPerPage = 2 // Set the number of items to display per page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCardData = cardData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>

        <div className="PaginationContainer">
          <div className="pagination-controls">
            <button
              id="prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </button>
          </div>

          <div className="CardContainer">
            {currentCardData.map((card) => (
              <a href={card.text} key={card.id} target="_blank">
                <div className="card">
                  <img
                    className="card-img"
                    src={card.imageUrl}
                    alt={`Thumbnail ${card.id}`}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <div className="card-text">
                      {card.text}
                      <ul>
                        {card.listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="pagination-controls">
            <button
              id="next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastItem >= cardData.length}
            >
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </div>
  )
}

export default Portfolio
