import { Box, Button, FormControl, Stack, Typography } from '@mui/material';
import router from 'next/router';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

type IFormInput = {
  models: { label: string; value: string };
  carBrand: { label: string; value: string };
  age: { label: string; value: string };
};

export function Search() {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);

    if (data.carBrand === null) {
      alert('Selecione pelo menos uma marca!');
      return;
    }

    router.push('/result');
  };

  return (
    <Box
      maxWidth="sm"
      sx={{
        mt: 4,
        p: 2,
        borderRadius: '.5rem',
        width: '100%',
        minWidth: 300,
      }}
    >
      <FormControl component="form" fullWidth onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <section>
            <Typography
              noWrap
              component="label"
              sx={{
                flexGrow: 1,
                fontFamily: 'roboto',
                fontWeight: 500,
                color: 'inherit',
              }}
            >
              Marca
            </Typography>
            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  isClearable
                />
              )}
              name="carBrand"
              control={control}
            />
          </section>

          <section>
            <Typography
              noWrap
              component="label"
              sx={{
                flexGrow: 1,
                fontFamily: 'roboto',
                fontWeight: 500,
                color: 'inherit',
              }}
            >
              Modelo
            </Typography>
            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  isClearable
                />
              )}
              name="models"
              control={control}
            />
          </section>

          <section>
            <Typography
              noWrap
              component="label"
              sx={{
                flexGrow: 1,
                fontFamily: 'roboto',
                fontWeight: 500,
                color: 'inherit',
              }}
            >
              Ano
            </Typography>
            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  isClearable
                />
              )}
              name="age"
              control={control}
            />
          </section>
        </Stack>
        <Button
          sx={{
            mt: 4,
          }}
          variant="contained"
          type="submit"
        >
          Consultar
        </Button>
      </FormControl>
    </Box>
  );
}
