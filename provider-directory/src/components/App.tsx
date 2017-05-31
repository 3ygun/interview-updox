import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

import { ProviderManager } from '../data/ProviderManager';
import { ProviderDisplay } from './ProviderDisplay';
import { ProviderEditor } from './ProviderEditor';

@observer
class App extends Component<{manager: ProviderManager}, {}> {
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
              <ProviderEditor manager={this.props.manager} />
            </div>
            <div className="col">
              <ProviderDisplay manager={this.props.manager} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
