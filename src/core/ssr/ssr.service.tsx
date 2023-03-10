import React from 'react';
import ReactDOM from 'react-dom/server';
import { SSRContextProvider } from './SSRContextProvider';
import { StaticRouter } from 'react-router-dom/server';
import * as fs from 'fs';

export default new class SSRService {
  template = fs.readFileSync('public/index.html', { encoding: 'utf-8' });

  render (data: any, url: string) {
    const html = ReactDOM.renderToString(
      <SSRContextProvider initial={data}>
        <StaticRouter location={url}>
          {/*<App/>*/}
        </StaticRouter>
      </SSRContextProvider>
    );

    return this.template
      .replace('<!--APP_ROOT-->', html)
      .replace('<!--APP_DATA-->', `window.__APP_DATA__ = ${JSON.stringify(data)};`);
  }
}
