import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { ProviderManager } from '../data/ProviderManager';
import { ProviderCard } from './ProviderCard';

@observer
export class ProviderDisplay extends Component<{ manager: ProviderManager }, { toRemove: number[] }> {

    constructor(props: { manager: ProviderManager }) {
        super(props);

        this.state = {
            toRemove: new Array<number>(),
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelect(event: any) {
        const id = Number(event.target.name);
        const exists = this.state.toRemove.indexOf(id) > -1;
        var toRemove = this.state.toRemove;

        if (exists) {
            toRemove = toRemove.filter(item => item !== id);
        } else {
            toRemove.push(id);
        }

        this.setState({ toRemove: toRemove })
    }

    handleSubmit(event: any) {
        this.props.manager.removeProviders(this.state.toRemove);
        this.setState({ toRemove: new Array<number>() });
        event.preventDefault();
    }

    render() {
        const providers = this.props.manager.getProviders;

        return (
            <div>
                <h2>Provider List</h2>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        {providers.map((provider, uid) => {
                            return (
                                <div key={uid} className="row">
                                    <ProviderCard {...provider} >
                                        <input className="col-1" type="checkbox"
                                        name={String(provider.id)}
                                        checked={this.state.toRemove.indexOf(provider.id) > -1}
                                        onChange={this.handleSelect} />
                                    </ProviderCard>
                                </div>
                            );

                        })}
                        <input type="submit" value="Remove" />
                    </form>
                </div>
            </div>
        );
    }
}
