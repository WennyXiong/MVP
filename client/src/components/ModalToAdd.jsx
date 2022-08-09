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

  return (
    <MTA.Background>
      <button onClick={() => setOpenModal(false)}> close </button>
    </MTA.Background>
  );
};

export default ModalToAdd;
