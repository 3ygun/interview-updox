import { PROVIDERS } from './mock-providers';
import { Provider } from '../types';

export class ProviderManager {
    providers: Provider[];

    constructor() {
        this.providers = PROVIDERS;
    }

    addProvider(provider: Provider): void {
        this.providers.push(provider);
    }

    getProviders(): Provider[] {
        return this.providers;
    }
}
