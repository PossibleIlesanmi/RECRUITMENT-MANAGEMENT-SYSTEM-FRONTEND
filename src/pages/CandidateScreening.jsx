import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#2D3748' : '#FFFFFF',
}));

const CandidateScreening = () => {
  const [formData, setFormData] = useState({
    name: '',
    qualifications: '',
    experience: '',
  });
  const [screeningResult, setScreeningResult] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate screening logic
    const result = formData.experience >= 3 && formData.qualifications.includes('Degree')
      ? 'Suitable'
      : 'Not Suitable';
    setScreeningResult({ ...formData, result });
  };

  return (
    <Box className="app-container" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom color={theme => theme.palette.primary.main} fontWeight="bold">
        Candidate Screening
      </Typography>
      <Typography paragraph color={theme => theme.palette.primary.main}>
        Enter candidate details to evaluate suitability.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Candidate Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="qualifications"
              label="Qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="experience"
              label="Experience (years)"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
              Screen Candidate
            </Button>
          </Grid>
        </Grid>
      </form>
      {screeningResult && (
        <StyledPaper>
          <Typography variant="h6" color={theme => theme.palette.secondary.main}>
            Screening Result
          </Typography>
          <Typography>Name: {screeningResult.name}</Typography>
          <Typography>Qualifications: {screeningResult.qualifications}</Typography>
          <Typography>Experience: {screeningResult.experience} years</Typography>
          <Typography variant="h6" color={screeningResult.result === 'Suitable' ? theme => theme.palette.success.main : '#EF4444'}>
            Status: {screeningResult.result}
          </Typography>
        </StyledPaper>
      )}
    </Box>
  );
};

export default CandidateScreening;