import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import DashTable from './DashTable.jsx'

import progress from '../images/progress.jpg';



const GifImg = styled.img`
    display: flex;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    margin: auto;
`;
function DashBoardCard() {
  return (
    <div>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m="10%"
    >
      <GifImg src={progress} />
    </Box>
  </div>
  );
}

export default DashBoardCard;
