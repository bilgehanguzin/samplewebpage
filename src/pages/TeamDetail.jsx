import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box
} from '@mui/material';

export default function TeamDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    setTeam({
      id: Number(id),
      name: id === '1' ? 'Automation Testing' : 'Performance Testing',
      description: id === '1'
        ? 'Specializing in developing and maintaining automated test frameworks for continuous integration and delivery.'
        : 'Focused on load testing, stress testing, and performance optimization of applications.',
      members: [
        {
          id: 1,
          name: 'Sarah Chen',
          role: 'Lead Test Engineer',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
        },
        {
          id: 2,
          name: 'Michael Rodriguez',
          role: 'Senior QA Engineer',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
        }
      ],
      projects: [
        {
          id: 1,
          name: 'Test Automation Framework',
          description: 'End-to-end testing framework using modern testing tools',
          status: 'ongoing'
        },
        {
          id: 2,
          name: 'CI/CD Pipeline',
          description: 'Automated testing integration in deployment pipeline',
          status: 'completed'
        }
      ]
    });
  }, [id]);

  if (!team) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        {team.name}
      </Typography>
      <Typography color="text.secondary" paragraph>
        {team.description}
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }}>
        Team Members
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {team.members.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {team.projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.name}
                  </Typography>
                  <Chip
                    label={project.status}
                    color={project.status === 'ongoing' ? 'primary' : 'success'}
                    size="small"
                  />
                </Box>
                <Typography color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}