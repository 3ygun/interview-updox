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

  renderNavbar() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3>Provider Directory</h3>
      </nav>
    );
  }

  render() {
    const navbar = this.renderNavbar();

    return (
      <div className="container-fluid">
        {navbar}
        <div className="container">
          <div className="row">
            <div className="col">
              <ProviderEditor providerManager={this.manager} />
            </div>
            <div className="col">
              <ProviderDisplay providerManager={this.manager} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
