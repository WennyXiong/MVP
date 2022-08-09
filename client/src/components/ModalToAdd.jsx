import React, { useState } from 'react';
import axios from 'axios';
import MTA from '../styles/MTA.jsx';

const ModalToAdd = ({ setOpenModal }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [appliedAtPlatform, setAppliedAtPlatform] = useState('');
  const [appliedAtDate, setAppliedAtDate] = useState('');
  const [status, setStatus] = useState('');
  const [nextDeadline, setNextDeadline] = useState('');
  const [JD, setJD] = useState('');
  const [notes, setNotes] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
    const applicationObj = {
      company,
      position,
      appliedAtPlatform,
      appliedAtDate,
      status,
      nextDeadline,
      JD,
      notes,
    };
    console.log('obj to submit: ', applicationObj);

    axios.post('/applications', applicationObj)
      .then((savedObj) => console.log('saved in list: ', savedObj))
      .catch((err) => console.log('error when POST: ', err));
  };

  return (
    <MTA.Background>
      <MTA.Container>
        <MTA.Xout onClick={() => setOpenModal(false)}> X </MTA.Xout>

        <MTA.Form onSubmit={onSubmit}>
          <MTA.Label>Company</MTA.Label>
          <MTA.Input onChange={(e) => setCompany(e.target.value)} />
          <MTA.Label>Position</MTA.Label>
          <MTA.Input onChange={(e) => setPosition(e.target.value)} />
          <MTA.Label>Applied Platform</MTA.Label>
          <MTA.Input onChange={(e) => setAppliedAtPlatform(e.target.value)} />
          <MTA.Label>Applied Date</MTA.Label>
          <MTA.Input onChange={(e) => setAppliedAtDate(e.target.value)} />
          <MTA.Label>Status</MTA.Label>
          <MTA.Input onChange={(e) => setStatus(e.target.value)} />
          <MTA.Label>Next Deadline</MTA.Label>
          <MTA.Input onChange={(e) => setNextDeadline(e.target.value)} />
          <MTA.Label>Job Description</MTA.Label>
          <MTA.Input onChange={(e) => setJD(e.target.value)} />
          <MTA.Label>Notes</MTA.Label>
          <MTA.Input onChange={(e) => setNotes(e.target.value)} />

          <MTA.SubmitBtn type="submit">
            Submittt
          </MTA.SubmitBtn>

        </MTA.Form>
      </MTA.Container>
    </MTA.Background>
  );
};

export default ModalToAdd;
