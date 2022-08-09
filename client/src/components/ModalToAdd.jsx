import React, { useState } from 'react';
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

  const onSubmit = (obj) => {
    console.log('obj to submit: ', obj);
  };

  return (
    <MTA.Background>
      <MTA.Form onSubmit={(e) => onSubmit(e.target.value)}>
        <MTA.Label>Company</MTA.Label>
        <MTA.Input />
        <MTA.Label>Position</MTA.Label>
        <MTA.Input />
        <MTA.Label>Applied Platform</MTA.Label>
        <MTA.Input />
        <MTA.Label>Applied Date</MTA.Label>
        <MTA.Input />
        <MTA.Label>Status</MTA.Label>
        <MTA.Input />
        <MTA.Label>Next Deadline</MTA.Label>
        <MTA.Input />
        <MTA.Label>Job Description</MTA.Label>
        <MTA.Input />
        <MTA.Label>Notes</MTA.Label>
        <MTA.Input />

        <MTA.CloseBtn onClick={() => setOpenModal(false)}>
          Close
        </MTA.CloseBtn>
        <MTA.SubmitBtn>
          Submittt
        </MTA.SubmitBtn>
      </MTA.Form>
    </MTA.Background>
  );
};

export default ModalToAdd;
