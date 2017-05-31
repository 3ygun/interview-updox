import * as React from 'react';

import { Props } from './App';
import { ProviderCard } from './ProviderCard';

export class ProviderDisplay extends React.Component<Props, object> {
    render() {
        return (
            <div>
                <h2>Provider List</h2>

                <div>
                    {this.props.providerManager.getProviders().map(
                        (provider, uid) => {
                            return <ProviderCard {...provider} key={uid} />;
                        }
                    )}
                </div>
            </div>
        );
    }
}
