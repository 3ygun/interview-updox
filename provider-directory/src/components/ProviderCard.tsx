import * as React from 'react';

import { Provider } from '../types/';

export class ProviderCard extends React.Component<Provider, object> {
    render() {
        return (
            <div className="card">
                <div className="card-block row">
                    <div className="col">
                        <h2>{this.props.last_name}, {this.props.first_name}</h2>
                        <h4>{this.props.email_address}</h4>
                    </div>
                    <div className="col">
                        <h3>{this.props.specialty}</h3>
                        <h4>{this.props.practice_name}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
