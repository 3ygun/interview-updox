import * as React from 'react';
import './App.css';

import { ProviderManager } from '../data/ProviderManager';
import { ProviderDisplay } from './ProviderDisplay';
import { ProviderEditor } from './ProviderEditor';

export interface Props {
  providerManager: ProviderManager;
}

class App extends React.Component<{}, null> {
  manager: ProviderManager;

  constructor() {
    super();
    this.manager = new ProviderManager();
  }

  render() {
    return (
      <div>
        <ProviderEditor providerManager={this.manager} />
        <ProviderDisplay providerManager={this.manager} />
      </div>
    );
  }
}

export default App;
