import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sections from '../styles/Sections.jsx';
import NT from '../styles/NT.jsx';

const NavTopBar = ({ username }) => {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    axios({
      method: 'GET',
      url: process.env.QUOTE_URL,
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST,
      },
    })
      .then((newQuote) => setQuote(newQuote.data.quote))
      .catch((err) => console.log('error when generating new quote: ', err));
  };

  useEffect(() => {
    generateQuote();
  }, []);

  const getNewQuote = (e) => {
    e.preventDefault();
    generateQuote();
  };

  return (
    <Sections.NavTop>
      <NT.Logo>
        {username}
        &apos;s Tracker
      </NT.Logo>
      <NT.Quote>
        QUOTE OF THE DAY
        <NT.RenewButton onClick={(e) => getNewQuote(e)}>⭐️</NT.RenewButton>
        <br />

        {quote}
      </NT.Quote>
    </Sections.NavTop>
  );
};

export default NavTopBar;
