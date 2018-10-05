import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'typewriter',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
