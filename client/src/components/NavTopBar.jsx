import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Sections from '../styles/Sections.jsx';
import NT from '../styles/NT.jsx';

const NavTopBar = ({ username, setUsername }) => {
  const [quote, setQuote] = useState('');
  const [openChangeUsernameModal, setOpenChangeUsernameModal] = useState(false);
  const [tempUsername, setTempUsername] = useState('');

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

  const changeUsername = () => {

  };

  return (
    <Sections.NavTop>
      <NT.Logo onClick={() => setOpenChangeUsernameModal(true)}>
        {username}
        &apos;s Tracker
      </NT.Logo>
      {openChangeUsernameModal
      && (
        <NT.MDBackground>
          <NT.MDContainer>
            <NT.Xout onClick={() => setOpenChangeUsernameModal(false)}> X </NT.Xout>
            <NT.Form>
              <NT.Label>Change Username</NT.Label>
              <NT.Input onChange={(e) => setTempUsername(e.target.value)} />
              <Button
                onClick={(e) => {
                  setUsername(tempUsername);
                  setOpenChangeUsernameModal(false);
                }}
                variant="contained"
                style={{
                  margin: '40px 50px',
                  display: 'block',
                  width: '200px',
                  height: '30px',
                  backgroundColor: '#a98568',
                  top: '20px',
                }}
              >
                SAVE
              </Button>
            </NT.Form>
          </NT.MDContainer>
        </NT.MDBackground>
      )}
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
