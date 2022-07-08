import { Box, Button } from '@mui/material';
import router from 'next/router';
import { setCookie } from 'nookies';

import Select from 'react-select';

import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ConsultFipeContext } from '~/contexts/ConsultFipeContext';
import { api } from '~/services/api';

interface BrandsProps {
  codigo: string;
  nome: string;
}

export function Search() {
  const [brands, setBrands] = useState<BrandsProps[]>();
  const [models, setModels] = useState<BrandsProps[]>();
  const [ages, setAges] = useState<BrandsProps[]>();

  const [loading, setLoading] = useState(true);

  const [lockModel, setLockModel] = useState(true);
  const [lockAge, setLockAge] = useState(true);
  const [lockButton, setButton] = useState(true);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [age, setAge] = useState('');

  const { setDataFipe } = useContext(ConsultFipeContext);

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
  async function handleChangeBrand(brand: any) {
    setBrand(brand.value);
    setCookie(undefined, 'marca', brand.value, {
      maxAge: 60 * 60 * 24, // 24 hour
      path: '/',
    });

    setLoading(true);

    try {
      const response = await api.get(`/marcas/${brand.value}/modelos`);
      setModels(response.data.modelos);

      setLockModel(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  // listar anos com base no modelo
  async function handleChangeModels(model: any) {
    setModel(model.value);
    setCookie(undefined, 'modelo', model.value, {
      maxAge: 60 * 60 * 24, // 24 hour
      path: '/',
    });
    setLoading(true);

    try {
      const response = await api.get(
        `/marcas/${brand}/modelos/${model.value}/anos`
      );
      setAges(response.data);

      setLockAge(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  // consultar fipe
  async function handleChangeConsult(age: any) {
    setAge(age.value);
    setCookie(undefined, 'ano', age.value, {
      maxAge: 60 * 60 * 24, // 24 hour
      path: '/',
    });
    setLoading(true);

    try {
      const response = await api.get(
        `/marcas/${brand}/modelos/${model}/anos/${age.value}`
      );

      setDataFipe(response.data);

      setButton(false);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  const marcas = brands?.map((brand) => ({
    label: brand.nome,
    value: brand.codigo,
  }));

  const modelos = models?.map((model) => ({
    label: model.nome,
    value: model.codigo,
  }));

  const anos = ages?.map((age) => ({
    label: age.nome,
    value: age.codigo,
  }));

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
      <Box component="section" mt={2}>
        <Select
          autoFocus
          placeholder="Selecione a marca do veículo"
          className="basic-single"
          classNamePrefix="select"
          name="color"
          isClearable
          options={marcas}
          onChange={handleChangeBrand}
        />
      </Box>

      <Box component="section" mt={2}>
        <Select
          placeholder="Selecione o modelo do veículo"
          className="basic-single"
          classNamePrefix="select"
          name="color"
          isClearable
          isDisabled={lockModel ? true : false}
          options={modelos}
          onChange={handleChangeModels}
        />
      </Box>

      <Box component="section" mt={2}>
        <Select
          placeholder="Selecione o ano modelo do veículo"
          className="basic-single"
          classNamePrefix="select"
          name="color"
          isClearable
          isDisabled={lockAge ? true : false}
          options={anos}
          onChange={handleChangeConsult}
        />
      </Box>

      <Button
        sx={{
          mt: 4,
          width: '100%',
        }}
        variant="contained"
        disabled={lockButton ? true : false}
        onClick={() => router.push('/result')}
      >
        Consultar
      </Button>
    </Box>
  );
}
