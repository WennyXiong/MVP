import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Sections from '../styles/Sections.jsx';
import NL from '../styles/NL.jsx';

const NavLeft = ({ showNavOptions, setShowNavOptions }) => {
  console.log('something');

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
            <NL.Options>
              View All
            </NL.Options>
            <NL.Options>
              Applied
            </NL.Options>
            <NL.Options>
              Interview Scheduled
            </NL.Options>
            <NL.Options>
              Final Interview
            </NL.Options>
            <NL.Options>
              Offered
            </NL.Options>
            <NL.Options>
              Archived
            </NL.Options>

          </NL.Applications>
        )}
      </NL.Div>
    </Sections.NavLeft>
  );
};

export default NavLeft;
