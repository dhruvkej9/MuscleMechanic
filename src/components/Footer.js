import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/navbar-logo-gym(1).png';

const Footer = () => (
  <Box mt="80px" bgcolor="#f8f5ff">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ height: '200px' }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Copyright © 2024
      <br />
      Dhruv Kejriwal & Ayush Chahar
    </Typography>
  </Box>
);

export default Footer;
