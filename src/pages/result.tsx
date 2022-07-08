import { Box, Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';

import { parseCookies } from 'nookies';

import Navbar from '~/components/Navbar';

import { ConsultFipeContext } from '~/contexts/ConsultFipeContext';
import router from 'next/router';

export default function Result() {
  const { dataFipe } = useContext(ConsultFipeContext);

  useEffect(() => {
    const { marca } = parseCookies();

    if (marca === 'undefined') {
      router.push('/');
    }
  }, []);

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
          <Box
            component="h1"
            color="black"
            sx={{ fontSize: '2rem', fontWeight: 700 }}
          >
            Tabela Fipe:
          </Box>

          <Box
            component="p"
            color="black"
            m={0}
            sx={{ fontSize: '2rem', fontWeight: 500 }}
          >
            {dataFipe?.Marca} {dataFipe?.Modelo}
          </Box>

          <Box
            component="p"
            color="grey.600"
            m={0}
            sx={{ fontSize: '1.5rem', fontWeight: 400 }}
          >
            Ano modelo: {dataFipe?.AnoModelo}
          </Box>

          <Box
            component="div"
            sx={{
              backgroundColor: green['A400'],
              borderRadius: 16,
              px: 4,
              mt: 3,
            }}
          >
            <Box
              component="p"
              color="white"
              sx={{ fontSize: '2rem', fontWeight: 700 }}
            >
              {dataFipe?.Valor}
            </Box>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { marca } = parseCookies(ctx);

  if (marca === 'undefined') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
