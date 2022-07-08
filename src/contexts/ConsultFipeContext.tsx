import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { parseCookies, setCookie } from 'nookies';
import { api } from '~/services/api';

type ConsultFipeContextType = {
  dataFipe: DataFipeProps | undefined;
  setDataFipe: Dispatch<SetStateAction<DataFipeProps | undefined>>;
};

export const ConsultFipeContext = createContext({} as ConsultFipeContextType);

interface ConsultProviderProps {
  children: ReactNode;
}

interface DataFipeProps {
  AnoModelo: number;
  Marca: string;
  Modelo: string;
  Valor: string;
}

export function ConsultFipeProvider({ children }: ConsultProviderProps) {
  const [dataFipe, setDataFipe] = useState<DataFipeProps>();

  useEffect(() => {
    const { marca, modelo, ano } = parseCookies();
    api
      .get(`/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
      .then((response) => {
        console.log(response);
        setDataFipe(response.data);
      });
  }, []);

  return (
    <ConsultFipeContext.Provider value={{ dataFipe, setDataFipe }}>
      {children}
    </ConsultFipeContext.Provider>
  );
}
