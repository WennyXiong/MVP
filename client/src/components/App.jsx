import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [applicationList, setApplicationList] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  const getApplications = () => {
    axios.get('/applications')
      .then((Applications) => {
        setApplicationList(Applications.data);
      })

      .catch((err) => console.log('error when getting the list: ', err));
  };

  useEffect(() => {
    getApplications();
  }, [updateCount]);

  return (
    <GeneralStyles.Background>
      <GeneralStyles.Div>

        <NavTopBar username={username} />
        <NavLeft
          showNavOptions={showNavOptions}
          setShowNavOptions={setShowNavOptions}
        />

        <Sections.MainInfo>
          <CompanySummary />
          <JobApplications
            applicationList={applicationList}
            updateCount={updateCount}
            setUpdateCount={setUpdateCount}
          />
        </Sections.MainInfo>

        <Sections.Footer>
          <Footer />
        </Sections.Footer>

      </GeneralStyles.Div>
    </GeneralStyles.Background>
  );
};

export default App;
