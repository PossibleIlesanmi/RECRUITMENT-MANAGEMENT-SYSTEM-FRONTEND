import React from 'react';
import { Typography, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#2D3748' : '#FFFFFF',
}));

const Reports = () => {
  return (
    <Box className="app-container">
      <Typography variant="h3" gutterBottom color="#1E3A8A" fontWeight="bold">
        Reports
      </Typography>
      <Typography paragraph color="#1E3A8A">
        Summary of recruitment activities and outcomes.
      </Typography>
      <StyledPaper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#F59E0B', fontWeight: 600 }}>Report Type</TableCell>
              <TableCell style={{ color: '#F59E0B', fontWeight: 600 }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Total Applications</TableCell>
              <TableCell>150</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shortlisted Candidates</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hired Candidates</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledPaper>
    </Box>
  );
};

export default Reports;