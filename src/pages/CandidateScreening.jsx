import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  borderRadius: 12,
  backgroundColor: theme.palette.mode === 'dark' ? '#2D3748' : '#FFFFFF',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const CandidateScreening = () => {
  const [formData, setFormData] = useState({
    name: '',
    qualifications: '',
    experience: '',
  });
  const [screeningResult, setScreeningResult] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result =
      formData.experience >= 3 &&
      formData.qualifications.toLowerCase().includes('degree')
        ? 'Suitable'
        : 'Not Suitable';
    setScreeningResult({ ...formData, result });
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: '80px', // Space for header
        paddingBottom: '60px', // Space for footer
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Candidate Screening
      </Typography>
      <Typography
        paragraph
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        Enter candidate details to evaluate suitability.
      </Typography>

      <StyledPaper component="form" onSubmit={handleSubmit}>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 1 }}
              fullWidth
            >
              Screen Candidate
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>

      {screeningResult && (
        <StyledPaper>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.secondary.main }}
          >
            Screening Result
          </Typography>
          <Typography>Name: {screeningResult.name}</Typography>
          <Typography>
            Qualifications: {screeningResult.qualifications}
          </Typography>
          <Typography>
            Experience: {screeningResult.experience} years
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              fontWeight: 'bold',
              color:
                screeningResult.result === 'Suitable'
                  ? (theme) => theme.palette.success.main
                  : '#EF4444',
            }}
          >
            Status: {screeningResult.result}
          </Typography>
        </StyledPaper>
      )}
    </Box>
  );
};

export default CandidateScreening;
