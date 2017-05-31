import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { ProviderManager } from '../data/ProviderManager';
import { ProviderCard } from './ProviderCard';

@observer
export class ProviderDisplay extends Component<{ manager: ProviderManager }, {}> {
    render() {
        const providers = this.props.manager.getProviders;

        return (
            <div>
                <h2>Provider List</h2>

                <div>
                    {providers.map((provider, uid) => {
                        return <ProviderCard {...provider} key={uid} />;
                    })}
                </div>
            </div>
        );
    }
}
