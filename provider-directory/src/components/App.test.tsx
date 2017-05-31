import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import ProviderManager from '../data/ProviderManager';

it('renders without crashing', () => {
  const providerManager: ProviderManager = new ProviderManager([]);
  const div = document.createElement('div');
  ReactDOM.render(<App manager={providerManager}/>, div);
});
