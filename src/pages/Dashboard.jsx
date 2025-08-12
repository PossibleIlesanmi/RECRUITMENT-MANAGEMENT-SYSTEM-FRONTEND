import React from 'react';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#F7FAFC' : theme.palette.text.primary, // Custom color for dark mode
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.paper : theme.palette.background.paper,
}));

const Dashboard = () => {
  console.log('Dashboard component rendering');
  return (
    <Box className="app-container" sx={{ padding: 2, textAlign: 'left' }}>
      <Typography variant="h3" gutterBottom color={theme => theme.palette.primary.main} fontWeight="bold" sx={{ marginBottom: 2 }}>
        Dashboard
      </Typography>
      <Typography paragraph color={theme => theme.palette.primary.main} sx={{ marginBottom: 3 }}>
        Overview of recruitment activities and key metrics.
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid sx={{ flexBasis: '100%', [theme => theme.breakpoints.up('sm')]: { flexBasis: '50%' }, [theme => theme.breakpoints.up('md')]: { flexBasis: '25%' } }}>
          <StyledPaper>
            <Typography variant="h6">Total Candidates</Typography>
            <Typography variant="h4" color={theme => theme.palette.secondary.main}>150</Typography>
          </StyledPaper>
        </Grid>
        <Grid sx={{ flexBasis: '100%', [theme => theme.breakpoints.up('sm')]: { flexBasis: '50%' }, [theme => theme.breakpoints.up('md')]: { flexBasis: '25%' } }}>
          <StyledPaper>
            <Typography variant="h6">Active Jobs</Typography>
            <Typography variant="h4" color={theme => theme.palette.secondary.main}>12</Typography>
          </StyledPaper>
        </Grid>
        <Grid sx={{ flexBasis: '100%', [theme => theme.breakpoints.up('sm')]: { flexBasis: '50%' }, [theme => theme.breakpoints.up('md')]: { flexBasis: '25%' } }}>
          <StyledPaper>
            <Typography variant="h6">Interviews Scheduled</Typography>
            <Typography variant="h4" color={theme => theme.palette.secondary.main}>25</Typography>
          </StyledPaper>
        </Grid>
        <Grid sx={{ flexBasis: '100%', [theme => theme.breakpoints.up('sm')]: { flexBasis: '50%' }, [theme => theme.breakpoints.up('md')]: { flexBasis: '25%' } }}>
          <StyledPaper>
            <Typography variant="h6">Hired</Typography>
            <Typography variant="h4" color={theme => theme.palette.success.main}>8</Typography>
          </StyledPaper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 4, display: 'block', marginLeft: 0 }}>
        View Detailed Report
      </Button>
    </Box>
  );
};

export default Dashboard;