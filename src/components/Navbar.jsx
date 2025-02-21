import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <BugReportIcon sx={{ mr: 1 }} />
            <Typography variant="h6" noWrap sx={{ fontWeight: 700 }}>
              Test Engineering
            </Typography>
          </RouterLink>
          <div style={{ flexGrow: 1 }} />
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/teams">
            Teams
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}