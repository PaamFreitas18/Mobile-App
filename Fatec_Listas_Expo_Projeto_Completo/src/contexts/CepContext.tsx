import React, { createContext, useContext, useMemo, useState } from 'react';

type CepData = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  [k: string]: any;
};

type Ok = { erro: false, data: CepData };
type Err = { erro: true, msg: string };
type Result = Ok | Err;

type Ctx = {
  history: CepData[];
  addCep: (c: CepData) => void;
  lastResult: Result | null;
  setLastResult: (r: Result | null) => void;
};

const CtxCep = createContext<Ctx | null>(null);

export function CepProvider({ children }:{ children: React.ReactNode }){
  const [history, setHistory] = useState<CepData[]>([]);
  const [lastResult, setLastResult] = useState<Result | null>(null);
  const addCep = (c: CepData) => setHistory((h) => [c, ...h]);
  const value = useMemo(()=>({ history, addCep, lastResult, setLastResult }), [history, lastResult]);
  return <CtxCep.Provider value={value}>{children}</CtxCep.Provider>;
}

export function useCep(){
  const ctx = useContext(CtxCep);
  if(!ctx) throw new Error('useCep deve ser usado dentro de CepProvider');
  return ctx;
}
