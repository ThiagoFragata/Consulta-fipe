import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import { api } from '~/services/api';

interface BrandsProps {
  codigo: string;
  nome: string;
}

interface DataFipeProps {
  AnoModelo: number;
  CodigoFipe: string;
  Combustivel: string;
  Marca: string;
  MesReferencia: string;
  Modelo: string;
  SiglaCombustivel: string;
  TipoVeiculo: 1;
  Valor: string;
}

export function Search() {
  const [brands, setBrands] = useState<BrandsProps[]>();
  const [models, setModels] = useState<BrandsProps[]>();
  const [ages, setAges] = useState<BrandsProps[]>();

  const [dataFipe, setDataFipe] = useState<DataFipeProps>();

  const [loading, setLoading] = useState(true);

  const [lockModel, setLockModel] = useState(true);
  const [lockAge, setLockAge] = useState(true);
  const [lockButton, setButton] = useState(true);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [age, setAge] = useState('');

  // listar marcas
  useEffect(() => {
    api
      .get('/marcas')
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // listar modelos
  async function handleChangeBrand(event: SelectChangeEvent) {
    event.preventDefault();

    setBrand(event.target.value as string);
    setLoading(true);

    try {
      const response = await api.get(`/marcas/${event.target.value}/modelos`);
      setModels(response.data.modelos);

      console.log('modelos', models);

      setLockModel(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  // listar anos com base no modelo
  async function handleChangeModels(event: SelectChangeEvent) {
    event.preventDefault();

    setModel(event.target.value as string);
    setLoading(true);

    try {
      const response = await api.get(
        `/marcas/${brand}/modelos/${event.target.value}/anos`
      );
      setAges(response.data);

      console.log('anos', ages);

      setLockAge(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  // consultar fipe
  async function handleChangeConsult(event: SelectChangeEvent) {
    event.preventDefault();

    setAge(event.target.value as string);
    setLoading(true);

    try {
      const response = await api.get(
        `/marcas/${brand}/modelos/${model}/anos/${event.target.value}`
      );

      setDataFipe(response.data);

      setButton(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }

    console.log(dataFipe);
  }

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
      <Box>{loading ? 'load' : ''}</Box>

      <Box component="section" mt={2}>
        <InputLabel id="brand">Marca</InputLabel>
        <Select
          id="selectBrand"
          label="Marca"
          labelId="brand"
          onChange={handleChangeBrand}
          value={brand}
          sx={{ width: '100%' }}
        >
          {brands?.map((brand) => (
            <MenuItem key={brand.codigo} value={brand.codigo}>
              {brand.nome}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box component="section" mt={2}>
        <InputLabel id="model">Modelo</InputLabel>
        <Select
          disabled={lockModel ? true : false}
          id="selectModel"
          label="Modelo"
          labelId="model"
          onChange={handleChangeModels}
          value={model}
          sx={{ width: '100%' }}
        >
          {models?.map((model) => (
            <MenuItem key={model.codigo} value={model.codigo}>
              {model.nome}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box component="section" mt={2}>
        <InputLabel id="age">Age</InputLabel>
        <Select
          disabled={lockAge ? true : false}
          id="selectAge"
          label="Ano"
          labelId="age"
          value={age}
          onChange={handleChangeConsult}
          sx={{ width: '100%' }}
        >
          {ages?.map((age) => (
            <MenuItem key={age.codigo} value={age.codigo}>
              {age.nome}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Button
        sx={{
          mt: 4,
          py: 2,
          width: '100%',
        }}
        variant="contained"
        disabled={lockButton ? true : false}
      >
        Consultar
      </Button>
    </Box>
  );
}
