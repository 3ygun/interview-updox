import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { ProviderManager } from '../data/ProviderManager';
import { Provider, ProviderClass } from '../types';

@observer
export class ProviderEditor extends Component<{ manager: ProviderManager }, Provider> {
    constructor(props: { manager: ProviderManager }) {
        super(props);

        this.state = new ProviderClass();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event: any) {
        const provider: Provider = {
            id: 0,
            email_address: this.state.email_address,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            practice_name: this.state.practice_name,
            specialty: this.state.specialty
        }

        this.props.manager.addProvider(provider);
        this.setState(new ProviderClass());
        event.preventDefault();
    }

    render() {
        return (
            <div className="card card-block editor-padding">
                <h2 className="card-title">Create Provider</h2>

                <form onSubmit={this.handleSubmit} className="Provider-Editor">
                    <label>
                        Last Name: <span className="Red-Star">*</span>
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />
                    </label>
                    <label>
                        First Name: <span className="Red-Star">*</span>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Email Address: <span className="Red-Star">*</span>
                        <input type="email" name="email_address" value={this.state.email_address} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Specialty:
                        <input type="text" name="specialty" value={this.state.specialty} onChange={this.handleChange} />
                    </label>
                    <label>
                        Practice Name:
                        <input type="text" name="practice_name" value={this.state.practice_name} onChange={this.handleChange} />
                    </label>

                    <span style={{ padding: "0px 0px 15px 0px" }}>
                        <span className="Red-Star">*</span> denotes a required field
                    </span>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
