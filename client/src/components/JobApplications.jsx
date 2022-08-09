import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sections from '../styles/Sections.jsx';
import JA from '../styles/JA.jsx';
import ModalToAdd from './ModalToAdd.jsx';

const JobApplications = ({ applicationList, setUpdateCount }) => {
  const [sortBy, setSortBy] = useState('sort by');
  const [openModal, setOpenModal] = useState(false);

  console.log('applicationList: ', applicationList);

  return (
    <Sections.JobApplications>
      <JA.Header> Applications </JA.Header>
      <JA.SortBy onChange={(e) => setSortBy(e.target.value)}>
        <option> sort by </option>
        <option> newest </option>
        <option> deadline </option>
      </JA.SortBy>

      <JA.AddButton onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </JA.AddButton>

      {openModal && <ModalToAdd setOpenModal={setOpenModal} />}
      {(openModal === false && applicationList.length > 0)
      && (
        <JA.ApplicationTable>
          <thead>
            <JA.HeadTr rowspan="2">
              <JA.Th>Company</JA.Th>
              <JA.Th>Position</JA.Th>
              <JA.Th>Applied At</JA.Th>
              <JA.Th>Status</JA.Th>
              <JA.Th>Next Deadline</JA.Th>
              <JA.Th>Job Description</JA.Th>
              <JA.Th>Notes</JA.Th>
            </JA.HeadTr>
          </thead>
          <tbody>
            <JA.Tr>
              <JA.Td style={{ borderLeft: '1px solid #aaaeb2' }}>
                {applicationList[0].company}
              </JA.Td>
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
          </tbody>
        </JA.ApplicationTable>
      )}
    </Sections.JobApplications>
  );
};

export default JobApplications;
