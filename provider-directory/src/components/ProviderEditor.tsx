import * as React from 'react';

import { ProviderManager } from '../data/ProviderManager';

export interface Props {
    providerManager: ProviderManager;
}

export class ProviderEditor extends React.Component<Props, object> {
    render() {
        return (
            <div>
                Provider Editor
            </div>
        );
    }
}
