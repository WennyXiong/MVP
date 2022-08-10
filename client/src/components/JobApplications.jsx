import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Sections from '../styles/Sections.jsx';
import JA from '../styles/JA.jsx';
import ModalToAdd from './ModalToAdd.jsx';
import JobApplTable from './JobApplTable.jsx';

const JobApplications = ({ applicationList, updateCount, setUpdateCount }) => {
  const [sortBy, setSortBy] = useState('sort by');
  const [openModal, setOpenModal] = useState(false);

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

      {openModal
        && (
          <ModalToAdd
            setOpenModal={setOpenModal}
            updateCount={updateCount}
            setUpdateCount={setUpdateCount}
          />
        )}
      <br />
      <br />

      <JobApplTable
        applicationList={applicationList}
        updateCount={updateCount}
        setUpdateCount={setUpdateCount}
      />
    </Sections.JobApplications>
  );
};

export default JobApplications;
