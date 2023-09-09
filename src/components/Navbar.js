import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '30px', xs: '10px' }, justifyContent: 'none', alignItems: { xs: 'center' }, display: { xs: 'inline-grid', md: 'flex' } }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ height: '128px', display: 'flex' }} />
    </Link>
    <Stack
      direction="row"
      sx={{ gap: { xs: '10vw', md: '15vw', lg: '5vw' }, fontSize: { xs: '7vw', md: '35px', lg: '30px' } }}
      fontFamily="Alegreya"
      alignItems="flex-end"
      classname="navy"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #007FFF' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <a href="/trainee" className="trainer" style={{ textDecoration: 'none' }}>Trainer </a>
    </Stack>
    {/* <Stack>
      <a href="/trainee" style={{ marginTop: '45px', top: '5rem', right: '20rem', position: 'relative', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#007FFF', padding: '20px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }} className="trainee">Hire A Trainer </a>
    </Stack> */}
  </Stack>
);

export default Navbar;
