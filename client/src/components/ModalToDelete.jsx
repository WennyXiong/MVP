import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import MTD from '../styles/MTD.jsx';

const ModalToDelete = ({
  objToDelete,
  setOpenDeleteModal,
  updateCount,
  setUpdateCount,
}) => {
  const deleteApplication = () => {
    setOpenDeleteModal(false);
    let count = updateCount;

    axios.delete('/applcations', { data: objToDelete })
      .then((deletedObj) => console.log('updated obj in db: ', deletedObj))
      .then(() => { setUpdateCount(count += 1); })
      .catch((err) => console.log(err));
  };
  console.log('obj to delete: ', objToDelete);

  return (
    <MTD.Background>
      <MTD.Container>
        <MTD.Xout onClick={() => setOpenDeleteModal(false)}> X </MTD.Xout>
        <MTD.P> Sure you want to delete this application? </MTD.P>
        <Button
          onClick={deleteApplication}
          variant="contained"
          style={{ width: '100px', backgroundColor: 'palevioletred' }}
        >
          CONFIRM
        </Button>
      </MTD.Container>
    </MTD.Background>
  );
};

export default ModalToDelete;
