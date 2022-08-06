import React, { useState, useEffect } from 'react';
import Sections from '../styles/Sections.jsx';
import NL from '../styles/NL.jsx';

const NavLeft = () => {
  console.log('something');

  return (
    <Sections.NavLeft>
      <NL.Div>
        <NL.Span>
          More Companies
        </NL.Span>
        <br />
        <NL.Span>
          Applications
        </NL.Span>
        <br />
        <NL.Applications>
          <NL.Options>
            View All
          </NL.Options>
          <NL.Options>
            Ready to Apply
          </NL.Options>
          <NL.Options>
            AppOptionsed
          </NL.Options>
          <NL.Options>
            Interview Scheduled
          </NL.Options>
          <NL.Options>
            Archived
          </NL.Options>

        </NL.Applications>
      </NL.Div>
    </Sections.NavLeft>
  );
};

export default NavLeft;
