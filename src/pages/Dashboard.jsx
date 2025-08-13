import React from 'react';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#F7FAFC' : theme.palette.text.primary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : theme.palette.background.paper,
}));

const Dashboard = () => {
  return (
    <Box className="app-container" sx={{ padding: 2 }}>
      <Typography
        variant="h3"
        gutterBottom
        color={(theme) => theme.palette.primary.main}
        fontWeight="bold"
      >
        Dashboard
      </Typography>

      <Typography
        paragraph
        color={(theme) => theme.palette.primary.main}
        sx={{ marginBottom: 3 }}
      >
        Overview of recruitment activities and key metrics.
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {[
          { title: 'Total Candidates', value: '150' },
          { title: 'Active Jobs', value: '12' },
          { title: 'Interviews Scheduled', value: '25' },
          { title: 'Hired', value: '8', color: 'success.main' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledPaper>
              <Typography variant="h6">{item.title}</Typography>
              <Typography
                variant="h4"
                color={(theme) => item.color || theme.palette.secondary.main}
              >
                {item.value}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
      >
        View Detailed Report
      </Button>
    </Box>
  );
};

export default Dashboard;
