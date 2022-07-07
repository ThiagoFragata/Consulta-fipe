import { Box, Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

import Navbar from '~/components/Navbar';

export default function Result() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            mt: 6,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tabela Fipe: Preço Chevrolet 2019
          </Typography>

          <Box
            component="div"
            sx={{
              backgroundColor: green['A400'],
              borderRadius: 16,
              py: 2,
              px: 6,
              mt: 3,
            }}
          >
            <Typography
              sx={{ fontSize: '2rem', fontWeight: 700 }}
              color="white"
              gutterBottom
            >
              R$ 9.001,52
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 300, mt: 2 }}
            color="red"
            gutterBottom
          >
            Este é o preço de compra do veículo
          </Typography>
        </Box>
      </Container>
    </>
  );
}
