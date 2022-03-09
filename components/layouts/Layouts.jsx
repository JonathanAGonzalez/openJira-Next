import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Navbar } from '../ui';
import Sidebar from '../ui/Sidebar';

const Layouts = ({ title = 'OpenJira App', children }) => {
  const styles = {
    flexFlow: 1,
  };

  return (
    <Box sx={styles}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};

export default Layouts;
