import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from '@material-ui/core';

import Sections from '../styles/Sections.jsx';
import JA from '../styles/JA.jsx';
import ModalToAdd from './ModalToAdd.jsx';

const JobApplications = ({ applicationList, setUpdateCount }) => {
  const [sortBy, setSortBy] = useState('sort by');
  const [openModal, setOpenModal] = useState(false);

  console.log('applicationList: ', applicationList);

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 950,
    },
    tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    name: {
      fontWeight: 'bold',
      color: theme.palette.secondary.dark,
    },
    status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block',
    },
  }));

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Application List</TableCell> */}
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Applied At</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Next Deadline</TableCell>
              <TableCell align="center">Job Description</TableCell>
              <TableCell align="center">Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicationList.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.company}
                </TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">
                  {row.appliedAtDate}
                  {row.appliedAtPlatform}
                </TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.nextDeadline}</TableCell>
                <TableCell align="left">{row.JD}</TableCell>
                <TableCell align="left">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {(openModal === false && applicationList.length > 0)
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
      )} */}
    </Sections.JobApplications>
  );
};

export default JobApplications;
