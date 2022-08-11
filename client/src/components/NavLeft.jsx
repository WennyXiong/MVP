import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Sections from '../styles/Sections.jsx';
import NL from '../styles/NL.jsx';

const NavLeft = ({
  showNavOptions,
  setShowNavOptions,
  applicationList,
  setApplicationList,
  updateCount,
  setUpdateCount,
}) => {
  const changeToViewAll = (e) => {
    e.preventDefault();
    setUpdateCount(updateCount += 1);
  };

  const changeToApplied = (e) => {
    e.preventDefault();
    const applied = [];
    applicationList.forEach((application) => {
      if (application.status === 'Applied' || application.status === 'applied') {
        applied.push(application);
      }
    });
    setApplicationList(applied);
  };

  const changeToInterviewScheduled = (e) => {
    e.preventDefault();
    const interviewScheduled = [];
    applicationList.forEach((application) => {
      if (application.status === 'Interview Scheduled' || application.status === 'Interview scheduled') {
        interviewScheduled.push(application);
      }
    });
    setApplicationList(interviewScheduled);
  };

  const changeToFinalInterview = (e) => {
    e.preventDefault();
    setUpdateCount(updateCount += 1);
    const finalInterview = [];
    applicationList.forEach((application) => {
      if (application.status === 'Final Interview') {
        finalInterview.push(application);
      }
    });
    setApplicationList(finalInterview);
  };

  const changeToOffered = (e) => {
    e.preventDefault();
    setUpdateCount(updateCount += 1);
    const offered = [];
    applicationList.forEach((application) => {
      if (application.status === 'Offer!!' || application.status === 'Offered') {
        offered.push(application);
      }
    });
    setApplicationList(offered);
  };

  const changeToArchived = (e) => {
    e.preventDefault();
    setUpdateCount(updateCount += 1);
    const archived = [];
    applicationList.forEach((application) => {
      if (application.status === 'Archived' || application.status === 'archived') {
        archived.push(application);
      }
    });
    setApplicationList(archived);
  };

  return (
    <Sections.NavLeft>
      <NL.Div>
        <NL.Span>
          More Companies
        </NL.Span>
        <br />
        <NL.Span onClick={() => setShowNavOptions(!showNavOptions)}>
          Applications
          {showNavOptions
            ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{
                  marginLeft: '5px',
                  position: 'relative',
                  top: '2px',
                  fontSize: '17px',
                }}
              />
            )
            : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{
                  marginLeft: '5px',
                  position: 'relative',
                  top: '2px',
                  fontSize: '17px',
                }}
              />
            )}
        </NL.Span>
        <br />
        {showNavOptions && (
          <NL.Applications>
            <NL.Options onClick={(e) => changeToViewAll(e)}>
              View All
            </NL.Options>
            <NL.Options onClick={(e) => changeToApplied(e)}>
              Applied
            </NL.Options>
            <NL.Options onClick={(e) => changeToInterviewScheduled(e)}>
              Interview Scheduled
            </NL.Options>
            <NL.Options onClick={(e) => changeToFinalInterview(e)}>
              Final Interview
            </NL.Options>
            <NL.Options onClick={(e) => changeToOffered(e)}>
              Offered
            </NL.Options>
            <NL.Options onClick={(e) => changeToArchived(e)}>
              Archived
            </NL.Options>

          </NL.Applications>
        )}
      </NL.Div>
    </Sections.NavLeft>
  );
};

export default NavLeft;
