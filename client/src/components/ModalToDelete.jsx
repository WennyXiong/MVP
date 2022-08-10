import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const ModalToDelete = ({ updateCount, setUpdateCount }) => {
  const updateApplication = (newObj) => {
    let count = updateCount;
    axios.put('/applcations')
      .then((updatedObj) => console.log('updated obj in db: ', updatedObj))
      .then(() => { setUpdateCount(count += 1); })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      modal to delete
    </div>
  );
};

export default ModalToDelete;
