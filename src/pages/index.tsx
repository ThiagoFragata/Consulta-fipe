import { Box, Container, Typography } from '@mui/material';
import Navbar from '~/components/Navbar';
import { Search } from '~/components/Search';

export default function Home() {
  return (
    <Box minWidth="300px">
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            mt: '2rem',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tabela Fipe
          </Typography>

          <Typography
            variant="h5"
            component="h1"
            sx={{
              mt: '1rem',
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Consulte o valor de um veículo de forma gratuita
          </Typography>
        </Box>
        <Search />
      </Container>
    </Box>
  );
}
