import { observable, computed, action, useStrict } from 'mobx';

import { PROVIDERS } from './mock-providers';
import { Provider } from '../types';

useStrict(true);

export class ProviderManager {
    @observable public providers: Provider[] = [];
    private nextID: number = 0;

    constructor(
        providers: Provider[] = PROVIDERS
    ) {
        this.addProvider = this.addProvider.bind(this);
        providers.forEach(this.addProvider);
    }

    @action
    addProvider(provider: Provider): void {
        provider.id = this.nextID;
        this.nextID++;
        this.providers.push(provider);
    }

    @action
    removeProviders(providerIDs: number[]): void {
        // indexOf(...) > -1 if item is found
        this.providers = this.providers.filter(
            provider => providerIDs.indexOf(provider.id) == -1
        );
    }

    @computed
    get getProviders(): Provider[] {
        return this.providers;
    }
}

export default ProviderManager;
