import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sections from '../styles/Sections.jsx';
import NT from '../styles/NT.jsx';

const NavTopBar = ({ username }) => {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const options = {
      method: 'GET',
      url: process.env.QUOTE_URL,
      // params: {author: 'Albert'},
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST,
      },
    };
    axios(options)
      .then((newQuote) => setQuote(newQuote))
      .catch((err) => console.log('error when generating new quote: ', err));
  };

  useEffect(() => {
    console.log('envs: ', process.env.QUOTE_URL);
    generateQuote();
  }, []);

  return (
    <Sections.NavTop>
      <NT.Logo>
        {username}
        &apos;s Tracker
      </NT.Logo>
      <NT.Quote>
        QUOTE TODAY
        <NT.RenewButton>⭐️</NT.RenewButton>
        <br />
        {quote}
        {/* I have no special talent. I am only passionately curious.
        I have no special talent. I am only passionately curious. */}
      </NT.Quote>
    </Sections.NavTop>
  );
};

export default NavTopBar;
