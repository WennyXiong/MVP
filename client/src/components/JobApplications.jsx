import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Sections from '../styles/Sections.jsx';
import JA from '../styles/JA.jsx';

const JobApplications = () => {
  const [sortBy, setSortBy] = useState('sort by');

  return (
    <Sections.JobApplications>
      <JA.Header> Applications </JA.Header>
      <JA.SortBy onChange={(e) => setSortBy(e.target.value)}>
        <option> sort by </option>
        <option> newest </option>
        <option> deadline </option>
      </JA.SortBy>

      <JA.AddButton>
        <FontAwesomeIcon icon={faPlus} />
      </JA.AddButton>

      <JA.ApplicationTable>
        <thead>
          <JA.HeadTr rowspan="2">
            <JA.Th>Company</JA.Th>
            <JA.Th>Position</JA.Th>
            <JA.Th>Platform</JA.Th>
            <JA.Th>Status</JA.Th>
            <JA.Th>Next Deadline</JA.Th>
            <JA.Th>Job Description</JA.Th>
            <JA.Th>Notes</JA.Th>
          </JA.HeadTr>
        </thead>
        <tbody>
          <JA.Tr>
            <JA.Td style={{ borderLeft: '1px solid #aaaeb2' }}>Google</JA.Td>
            <JA.Td>Software Engineer</JA.Td>
            <JA.Td>LinkedIn</JA.Td>
            <JA.Td>final interview</JA.Td>
            <JA.Td>10/20</JA.Td>
            <JA.Td>www.jsLink.com</JA.Td>
            <JA.Td style={{ borderRight: '1px solid #aaaeb2' }}>
              get prepared for questions 1 2 3, leetcode 1 2 3
              get prepared for questions 1 2 3, leetcode 1 2 3
              get prepared for questions 1 2 3, leetcode 1 2 3
              get prepared for questions 1 2 3, leetcode 1 2 3
            </JA.Td>
          </JA.Tr>

          <JA.Tr>
            <JA.Td style={{ borderLeft: '1px solid #aaaeb2' }}>Google</JA.Td>
            <JA.Td>Software Engineer</JA.Td>
            <JA.Td>LinkedIn</JA.Td>
            <JA.Td>final interview</JA.Td>
            <JA.Td>10/20</JA.Td>
            <JA.Td>www.jsLink.com</JA.Td>
            <JA.Td style={{ borderRight: '1px solid #aaaeb2' }}>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Td>
          </JA.Tr>
        </tbody>
      </JA.ApplicationTable>
    </Sections.JobApplications>
  );
};

export default JobApplications;
