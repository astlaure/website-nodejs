import React, { useState } from 'react';
import { SSRContext, SSRState } from './SSRContext';

interface Props {
  children: React.ReactNode;
  initial: { [key: string]: any };
}

export function SSRContextProvider({ children, initial }: Props) {
  const [state, setState] = useState<SSRState>({ ...initial });
  const [cache, setCache] = useState(() => {
    const result: any = {};
    Object.keys(initial).map(key => result[key] = Date.now());
    return result;
  });

  const getData = (key: string) => {
    return { data: state[key], cache: cache[key] };
  }

  const setData = (key: string, data: any) => {
    setState({ ...state, [key]: data });
    setCache({ ...cache, [key]: Date.now() });
  }

  return (
    <SSRContext.Provider value={{ getData, setData }}>
      {children}
    </SSRContext.Provider>
  );
}
