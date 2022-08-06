import React, { useState, useEffect } from 'react';
import GeneralStyles from '../styles/GeneralStyles.jsx';
import Sections from '../styles/Sections.jsx';
import NavTopBar from './NavTopBar.jsx';
import NavLeft from './NavLeft.jsx';
import CompanySummary from './CompanySummary.jsx';
import JobApplications from './JobApplications.jsx';

const App = () => {
  const [username, setUsername] = useState('Wenny');

  return (
    <GeneralStyles.Div>

      <NavTopBar username={username} />
      <NavLeft />

      <Sections.MainInfo>
        <CompanySummary />
        <JobApplications />
      </Sections.MainInfo>

    </GeneralStyles.Div>
  );
};

export default App;
