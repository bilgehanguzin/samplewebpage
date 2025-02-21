import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Home() {
  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Software Test Engineering Department
          </Typography>
          <Typography variant="h5">
            Ensuring quality through innovation and automation
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Who We Are
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <BugReportIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Quality Focused
                </Typography>
                <Typography color="text.secondary">
                  We ensure the highest quality standards in software delivery through comprehensive testing strategies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <CodeIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Automation Experts
                </Typography>
                <Typography color="text.secondary">
                  Our team specializes in creating robust automated testing frameworks and tools.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <SpeedIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Performance Driven
                </Typography>
                <Typography color="text.secondary">
                  We optimize application performance through sophisticated testing and monitoring.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}