import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { ProviderManager } from './data/ProviderManager';
export { ProviderManager } from './data/ProviderManager';

const providerManager = new ProviderManager();


ReactDOM.render(
  <App manager={providerManager}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
