import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import MTU from '../styles/MTU.jsx';

const ModalToUpdate = ({
  objToUpdate,
  setOpenUpdateModal,
  updateCount,
  setUpdateCount,
}) => {
  const [company, setCompany] = useState(objToUpdate.company);
  const [position, setPosition] = useState(objToUpdate.position);
  const [appliedAtPlatform, setAppliedAtPlatform] = useState(objToUpdate.appliedAtPlatform);
  const [appliedAtDate, setAppliedAtDate] = useState(objToUpdate.appliedAtDate);
  const [status, setStatus] = useState(objToUpdate.status);
  const [nextDeadline, setNextDeadline] = useState(objToUpdate.nextDeadline);
  const [JD, setJD] = useState(objToUpdate.JD);
  const [notes, setNotes] = useState(objToUpdate.notes);

  const updateApplication = (e) => {
    e.preventDefault();
    setOpenUpdateModal(false);

    const newObj = {
      _id: objToUpdate._id,
      company,
      position,
      appliedAtPlatform,
      appliedAtDate,
      status,
      nextDeadline,
      JD,
      notes,
    };
    console.log('object to update: ', newObj);
    let count = updateCount;
    axios.put('/applications', newObj)
      .then((updatedObj) => console.log('updated obj in db: ', updatedObj))
      .then(() => { setUpdateCount(count += 1); })
      .catch((err) => console.log(err));
  };

  return (
    <MTU.Background>
      <MTU.Container>
        <MTU.Xout onClick={() => setOpenUpdateModal(false)}> X </MTU.Xout>

        <MTU.UpdateForm onSubmit={(e) => updateApplication(e)}>
          <MTU.Label>Company</MTU.Label>
          <input defaultValue={company} onChange={(e) => setCompany(e.target.value)} />
          <MTU.Label>Position</MTU.Label>
          <input defaultValue={position} onChange={(e) => setPosition(e.target.value)} />
          <MTU.Label>Applied Platform</MTU.Label>
          <input defaultValue={appliedAtPlatform} onChange={(e) => setAppliedAtPlatform(e.target.value)} />
          <MTU.Label>Applied Date</MTU.Label>
          <input defaultValue={appliedAtDate} onChange={(e) => setAppliedAtDate(e.target.value)} />
          <MTU.Label>Status</MTU.Label>
          <input defaultValue={status} onChange={(e) => setStatus(e.target.value)} />
          <MTU.Label>Next Deadline</MTU.Label>
          <input defaultValue={nextDeadline} onChange={(e) => setNextDeadline(e.target.value)} />
          <MTU.Label>Job Description</MTU.Label>
          <input defaultValue={JD} onChange={(e) => setJD(e.target.value)} />
          <MTU.Label>Notes</MTU.Label>
          <input defaultValue={notes} onChange={(e) => setNotes(e.target.value)} />

          <Button
            type="submit"
            variant="contained"
            style={{
              display: 'block',
              width: '200px',
              height: '30px',
              backgroundColor: '#a98568',
              left: '65%',
              bottom: '-50%',
            }}
          >
            SAVE
          </Button>
        </MTU.UpdateForm>

      </MTU.Container>
    </MTU.Background>
  );
};

export default ModalToUpdate;
