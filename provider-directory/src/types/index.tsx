export interface Provider {
    id: number;
    last_name: string;
    first_name: string;
    email_address: string;
    specialty: string;
    practice_name: string;
}

export class ProviderClass implements Provider {
    constructor(
        public id: number = 0,
        public last_name: string = '',
        public first_name: string = '',
        public email_address: string = '',
        public specialty: string = '',
        public practice_name: string = ''
    ) { }
}
