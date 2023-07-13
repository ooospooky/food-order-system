"use client";
import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  const handlePopupClick = () => {
    window.open('/history', '_blank', 'width=500,height=500');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#292929' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/" >
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
          <div>
            <Button onClick={handlePopupClick} color="inherit">History</Button>
            <Link href="/cart">
              <Button color="inherit">Cart</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
