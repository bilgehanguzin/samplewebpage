import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    setTeams([
      {
        id: 1,
        name: 'Automation Testing',
        description: 'Specializing in developing and maintaining automated test frameworks for continuous integration and delivery.'
      },
      {
        id: 2,
        name: 'Performance Testing',
        description: 'Focused on load testing, stress testing, and performance optimization of applications.'
      }
    ]);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
        Our Teams
      </Typography>
      <Grid container spacing={4}>
        {teams.map((team) => (
          <Grid item xs={12} md={6} key={team.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {team.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {team.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/teams/${team.id}`}
                  variant="contained"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}