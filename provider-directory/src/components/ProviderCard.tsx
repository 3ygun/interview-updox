import * as React from 'react';

import { Provider } from '../types/';

export class ProviderCard extends React.Component<Provider, {}> {
    render() {
        return (
            <div className="card" style={{width: "100%"}}>
                <div className="card-block row">
                    <div className="col-1 flex-center">
                        {this.props.children}
                    </div>
                    <div className="col">
                        <h2>{this.props.last_name}, {this.props.first_name}</h2>
                        <a href={"mailto:" + this.props.email_address}>{this.props.email_address}</a>
                    </div>
                    <div className="col" style={{textAlign: "right"}}>
                        <h4>{this.props.specialty}</h4>
                        <h5>{this.props.practice_name}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
