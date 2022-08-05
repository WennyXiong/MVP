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

      <Sections.NavTop>
        <NavTopBar />
      </Sections.NavTop>

      <Sections.NavLeft>
        <NavLeft />
      </Sections.NavLeft>

      <Sections.MainInfo>
        <Sections.CompanySummary>
          <CompanySummary />
        </Sections.CompanySummary>

        <Sections.JobApplications>
          <JobApplications />
        </Sections.JobApplications>
      </Sections.MainInfo>

    </GeneralStyles.Div>
  );
};

export default App;
