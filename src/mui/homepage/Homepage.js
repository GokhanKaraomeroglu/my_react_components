import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Homepage = () => {
	return (
		<div>

<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
				WELCOME TO MUI HOMEPAGE
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'This is a sample homepage.'}
          {'It will grow part by part.'}
        </Typography>
        <Typography variant="body1">Homepage placeholder.</Typography>
      </Container>
			</Box>
		</div>
	)
}

export default Homepage