import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
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

// ========= table styling ==========
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe88d',
    },
    secondary: {
      light: '#ffe88d',
      main: '#faca87',
      contrastText: '#232119',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
    overflow: 'visible',
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  company: {
    fontWeight: 'bold',
    fontSize: '14px',
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
  footer: {
    align: 'right',
    width: 'fit-content',
  },
}));

const JobApplications = ({ applicationList, setUpdateCount }) => {
  const [sortBy, setSortBy] = useState('sort by');
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

      <br />
      <br />

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell} align="center">Company</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Position</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Applied At</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Status</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Next Deadline</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Notes</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">Job Description</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicationList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography className={classes.company}>{row.company}</Typography>
                </TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell align="center">
                  <Typography color="textSecondary" variant="body2">{row.appliedAtDate}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.appliedAtPlatform}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                      ((row.status === 'Interview Scheduled' && 'palevioletred')
                      || (row.status === 'Final Interview' && '#69baa8aa')
                      || (row.status === 'Offer!!' && '#22a469'))
                      || (row.status === 'Archieved' && '#ae8327aa'),
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.nextDeadline}</TableCell>
                <TableCell style={{ minWidth: '180px', wordWrap: 'break-word' }}>{row.notes}</TableCell>
                <TableCell style={{ maxWidth: '98px', wordWrap: 'break-word' }}>{row.JD}</TableCell>
                <TableCell> Edit </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className={classes.footer}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 30]}
              colSpan={8}
              count={applicationList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>

    </Sections.JobApplications>
  );
};

export default JobApplications;
