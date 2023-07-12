"use client";
import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#292929' }}>
        <Toolbar  sx={{ display:"flex",justifyContent:"space-between" }}>
          <Link href="/" >
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
          <Link href="/cart">
            <Button color="inherit">Cart</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
