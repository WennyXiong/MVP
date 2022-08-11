/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Sections from '../styles/Sections.jsx';
import CS from '../styles/CS.jsx';

const CompanySummary = ({ applicationList, updateCount, setUpdateCount }) => {
  const [companyList, setCompanyList] = useState([]);
  const [currList, setCurrList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const getCompanies = () => {
    const uniqueCompanyList = {};

    applicationList.forEach((application) => {
      const currCompany = (application.company);
      if (uniqueCompanyList[currCompany] === undefined) {
        uniqueCompanyList[currCompany] = 1;
      } else {
        uniqueCompanyList[currCompany] += 1;
      }
    });

    const companyArr = Object.entries(uniqueCompanyList);
    companyArr.sort((a, b) => b[1] - a[1]);
    setCompanyList(companyArr);

    const totalPage = Math.ceil(companyArr.length / 6);
    setPageCount(totalPage);

    // const listWithData = [];

    // if (companyArr[0] !== undefined) {
    //   companyArr.forEach((company) => {
    //     axios({
    //       method: 'GET',
    //       url: process.env.COMPANY_URL,
    //       params: { vanity_name: company },
    //       headers: {
    //         'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    //         'X-RapidAPI-Host': process.env.COMPANY_API_HOST,
    //       },
    //     })
    //       .then((companyObj) => {
    //         console.log('retrieved data: ', companyObj.data)
    //         listWithData.push(companyObj.data);
    //         setCompanyList(listWithData);
    //       })
    //       .catch((err) => console.log('error when using company API:', err));
    //   });
    // }

    // if (listWithData.length === companyArr.length && listWithData.length > 0) {
    //   setCompanyList(listWithData);
    // }
  };
  useEffect(() => {
    getCompanies();

    if (page === 1) {
      setCurrList(companyList.slice(0, 6));
    } else if (page === 2) {
      setCurrList(companyList.slice(6, 12));
    }
  }, [applicationList, page, updateCount,
    // currList,
  ]);

  useEffect(() => {
    getCompanies();

    if (page === 1) {
      setCurrList(companyList.slice(0, 6));
    } else if (page === 2) {
      setCurrList(companyList.slice(6, 12));
    }
  }, [applicationList, page, updateCount,
    //  currList,
  ]);

  return (
    <Sections.CompanySummary>
      <CS.Header> Company Summary </CS.Header>
      <Stack
        spacing={3}
        style={{
          width: '500px',
          display: 'inline-block',
          float: 'right',
          position: 'absolute',
          top: '19%',
        }}
      >
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
      {currList.map((company) => (
        <CS.CompanyBox key={company[0]}>
          <CS.AvatarContainer>
            <Avatar
              alt={company[0]}
              src="."
              style={{
                position: 'relative',
                top: '10%',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '1px solid',
                backgroundColor: '#a98568',
              }}
            />

          </CS.AvatarContainer>
          <CS.CompanyName>
            {company[0]}
            &nbsp; (
            {company[1]}
            )
          </CS.CompanyName>
        </CS.CompanyBox>
      ))}
    </Sections.CompanySummary>
  );
};

export default CompanySummary;
