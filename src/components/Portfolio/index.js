import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import thumbnail1 from '../../assets/images/1.png'
import thumbnail2 from '../../assets/images/2.png'
import './index.scss'

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
        'Id Generator',
        'Mail Notification',
      ],
      imageUrl: thumbnail1, // Update with your actual image path
    },
    {
      id: 2,
      title: 'Card 2',
      text: 'This is the second card. It also has some content.',
      listItems: ['Item 1', 'Item 2', 'Item 3'],
      imageUrl: thumbnail2, // Update with your actual image path
    },
    // {
    //   id: 3,
    //   title: 'Card 2',
    //   text: 'This is the second card. It also has some content.',
    //   listItems: ['Item 1', 'Item 2', 'Item 3'],
    //   imageUrl: thumbnail2, // Update with your actual image path
    // },
  ]

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
        <div className="cardContainer">
          {cardData.map((card) => (
            <a href='/'>
              <div className="card" key={card.id}>
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
      </div>
    </div>
  )
}

export default Portfolio
