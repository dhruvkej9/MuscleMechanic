import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym(2).png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #8B6FC6', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ height: '110px', aspectRatio: '1' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#8B6FC6" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
