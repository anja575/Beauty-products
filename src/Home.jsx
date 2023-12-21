import React, { useState, useEffect } from 'react'
import axios from 'axios';
import homeImage from './welcome.png';
import { Link } from 'react-router-dom';

function Home() {
  const [quotes, setQuotes] = useState(null);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const fetch = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuotes(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    fetch();
  }, []);

  useEffect(() => {
    if (quotes && quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [quotes]);
  

  return (
    <div className='back'>
    <img src={homeImage} alt="Home page image" className="home-image" /> 
    <div className="text-container">
      <h3>Quote of the day</h3>
      {randomQuote && (
        <h2>{randomQuote.text} - {randomQuote.author.split(',')[0]}</h2>
      )}
    </div>
  </div>

  )
}

export default Home