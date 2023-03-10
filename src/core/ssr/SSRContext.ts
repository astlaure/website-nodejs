import React from 'react';

export interface SSRState {
  [key: string]: any;
}

type Context = { getData: (key: string) => any, setData: (key: string, data: any) => any };

export const SSRContext = React.createContext<Context>({ getData: () => {}, setData: () => {} });
