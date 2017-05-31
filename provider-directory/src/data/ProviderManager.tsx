import { observable, computed, action, useStrict } from 'mobx';

import { PROVIDERS } from './mock-providers';
import { Provider } from '../types';

useStrict(true);

export class ProviderManager {
    @observable public providers: Provider[];

    constructor(
        providers: Provider[] = PROVIDERS
    ) { 
        this.providers = providers;
    }

    @action
    addProvider(provider: Provider): void {
        this.providers.push(provider);
    }

    @computed
    get getProviders(): Provider[] {
        return this.providers;
    }
}

export default ProviderManager;
