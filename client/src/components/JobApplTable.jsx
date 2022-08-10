import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
import ModalToUpdate from './ModalToUpdate.jsx';
import ModalToDelete from './ModalToDelete.jsx';

// ========= table styling ==========
const theme = createTheme({
  palette: {
    primary: {
      main: '#a98568',
    },
    secondary: {
      light: '#f7d7aa',
      // main: '#faca87',
      main: '#a98568',
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
    backgroundColor: '#f6f6f6',
  },
  tableContainer: {
    borderRadius: 15,
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

// ========= Job Application Table Component ==========
const JobApplTable = ({ applicationList, updateCount, setUpdateCount }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [objToDelete, setObjToDelete] = useState({});
  const [objToUpdate, setObjToUpdate] = useState({});

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onClickDelete = (targetObj) => {
    console.log('targetObj: ', targetObj);
  };

  return (
    <div>
      {/* ====== modals to update and delete ====== */}
      {openUpdateModal
      && (
        <ModalToUpdate
          objToUpdate={objToUpdate}
          setOpenUpdateModal={setOpenUpdateModal}
          updateCount={updateCount}
          setUpdateCount={setUpdateCount}
        />
      )}
      {openDeleteModal
      && (
        <ModalToDelete
          objToDelete={objToDelete}
          setOpenDeleteModal={setOpenDeleteModal}
          updateCount={updateCount}
          setUpdateCount={setUpdateCount}
        />
      )}

      {/* ====== Application List Table  ====== */}
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
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">
                  <Typography color="textSecondary" variant="body2">{row.appliedAtDate}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.appliedAtPlatform}</Typography>
                </TableCell>
                <TableCell align="center" style={{ maxWidth: '60px' }}>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                      ((row.status === 'Interview Scheduled' && 'palevioletred')
                      || (row.status === 'Final Interview' && '#6b64eeaa')
                      || (row.status === 'Offer!!' && '#22a28b'))
                      || (row.status === 'Archived' && '#ae8327aa'),
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.nextDeadline}</TableCell>
                <TableCell style={{ minWidth: '180px', wordWrap: 'break-word' }}>{row.notes}</TableCell>
                <TableCell style={{ maxWidth: '98px', wordWrap: 'break-word' }}>{row.JD}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    onClick={() => {
                      setObjToUpdate(row);
                      setOpenUpdateModal(true);
                    }}
                    icon={faPenToSquare}
                    style={{ cursor: 'pointer', marginRight: '3px' }}
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      setObjToDelete(row);
                      setOpenDeleteModal(true);
                    }}
                    icon={faTrashCan}
                    style={{ cursor: 'pointer' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter className={classes.footer}>
            <TableRow>
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
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>

  );
};

export default JobApplTable;
