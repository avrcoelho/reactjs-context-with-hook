import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

// childrn: todos os components que sçao filhos
export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  // value: o que os componentes filhos podem enchergar
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// todo hook tem que começar com 'use'
export function useCount() {
  const context = useContext(CountContext);

  // verifica se não tem um prvider por volta
  if (!context) throw new Error("useCount must be used within a CountProvider");

  const { count, setCount } = context;

  return { count, setCount };
}
