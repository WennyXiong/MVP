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
          <tr>
            <JA.HeadTh>Company</JA.HeadTh>
            <JA.HeadTh>Position</JA.HeadTh>
            <JA.HeadTh>Platform</JA.HeadTh>
            <JA.HeadTh>Status</JA.HeadTh>
            <JA.HeadTh>Next Deadline</JA.HeadTh>
            <JA.HeadTh>JD</JA.HeadTh>
            <JA.HeadTh>Notes</JA.HeadTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
          <tr>
            <JA.Th>Google</JA.Th>
            <JA.Th>Software Engineer</JA.Th>
            <JA.Th>LinkedIn</JA.Th>
            <JA.Th>final interview</JA.Th>
            <JA.Th>10/20</JA.Th>
            <JA.Th>www.jsLink.com</JA.Th>
            <JA.Th>get prepared for questions 1 2 3, leetcode 1 2 3</JA.Th>
          </tr>
        </tbody>
      </JA.ApplicationTable>
    </Sections.JobApplications>
  );
};

export default JobApplications;
