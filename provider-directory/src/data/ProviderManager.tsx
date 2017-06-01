import { observable, computed, action, useStrict } from 'mobx';

import { PROVIDERS } from './mock-providers';
import { Provider } from '../types';

useStrict(true);

export class ProviderManager {
    @observable private providers: Provider[] = [];
    @observable private sortBy: string = 'last_name';
    @observable private order: string = 'asc';
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

    @action
    setOrder(order: string) {
        this.order = order;
    }

    @action
    setSortBy(sortBy: string) {
        this.sortBy = sortBy;
    }

    @computed
    get getOrder(): string {
        return this.order;
    }

    @computed
    get getSortBy(): string {
        return this.sortBy;
    }

    private getCompareFunc(): ((a: Provider, b: Provider) => number) {
        switch (this.sortBy) {
            case 'last_name':
                return compareLastName;
            case 'first_name':
                return compareFirstName;
            case 'email_address':
                return compareEmailAddress;
            case 'specialty':
                return compareSpecialty;
            case 'practice_name':
                return comparePracticeName;
            default:
                return compareLastName;
        }
    }

    @computed
    get getProviders(): Provider[] {
        var providers = this.providers.sort(this.getCompareFunc());

        if (this.order === 'dsc') {
            return providers.reverse();
        } else {
            return providers;
        }
    }
}

function compareLastName(a: Provider, b: Provider): number {
    if (a.last_name < b.last_name)
        return -1;
    if (a.last_name > b.last_name)
        return 1;
    return 0;
}

function compareFirstName(a: Provider, b: Provider): number {
    if (a.first_name < b.first_name)
        return -1;
    if (a.first_name > b.first_name)
        return 1;
    return 0;
}

function compareEmailAddress(a: Provider, b: Provider): number {
    if (a.email_address < b.email_address)
        return -1;
    if (a.email_address > b.email_address)
        return 1;
    return 0;
}

function compareSpecialty(a: Provider, b: Provider): number {
    if (a.specialty < b.specialty)
        return -1;
    if (a.specialty > b.specialty)
        return 1;
    return 0;
}

function comparePracticeName(a: Provider, b: Provider): number {
    if (a.practice_name < b.practice_name)
        return -1;
    if (a.practice_name > b.practice_name)
        return 1;
    return 0;
}

export default ProviderManager;
