import React, { useState, useEffect } from 'react';
import Sections from '../styles/Sections.jsx';
import NT from '../styles/NT.jsx';

const NavTopBar = ({ username }) => {
  console.log('something');

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
        I have no special talent. I am only passionately curious.
        I have no special talent. I am only passionately curious.
      </NT.Quote>
    </Sections.NavTop>
  );
};

export default NavTopBar;
