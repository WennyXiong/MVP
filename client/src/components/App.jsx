import React, { useState, useEffect } from 'react';
import GeneralStyles from '../styles/GeneralStyles.jsx';
import Sections from '../styles/Sections.jsx';
import NavTopBar from './NavTopBar.jsx';
import NavLeft from './NavLeft.jsx';
import CompanySummary from './CompanySummary.jsx';
import JobApplications from './JobApplications.jsx';
import Footer from './Footer.jsx';

const App = () => {
  const [username, setUsername] = useState('Wenny');
  const [showNavOptions, setShowNavOptions] = useState(false);

  return (
    <GeneralStyles.Div>

      <NavTopBar username={username} />
      <NavLeft
        showNavOptions={showNavOptions}
        setShowNavOptions={setShowNavOptions}
      />

      <Sections.MainInfo>
        <CompanySummary />
        <JobApplications />
      </Sections.MainInfo>

      <Sections.Footer>
        <Footer />
      </Sections.Footer>

    </GeneralStyles.Div>
  );
};

export default App;
