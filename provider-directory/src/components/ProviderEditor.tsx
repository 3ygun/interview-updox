import * as React from 'react';

import { Props } from './App';
import { Provider } from '../types';

const blank: Provider = {
    email_address: '',
    first_name: '',
    last_name: '',
    practice_name: '',
    specialty: ''
};

export class ProviderEditor extends React.Component<Props, Provider> {
    constructor(props: Props) {
        super(props);

        this.state = blank;

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
            email_address: this.state.email_address,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            practice_name: this.state.practice_name,
            specialty: this.state.specialty
        }

        this.props.providerManager.addProvider(provider);
        this.state = blank;
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Create Provider</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                    </label>
                    <label>
                        First Name:
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email Address:
                        <input type="text" name="email_address" value={this.state.email_address} onChange={this.handleChange} />
                    </label>
                    <label>
                        Specialty:
                        <input type="text" name="specialty" value={this.state.specialty} onChange={this.handleChange} />
                    </label>
                    <label>
                        Practice Name:
                        <input type="text" name="practice_name" value={this.state.practice_name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
