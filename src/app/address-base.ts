import {PhoneBase} from './phone-base'

export class AddressBase{
    saved: boolean;
    id: string;
    name: string;
    location: string;
    office: string;
    phone: PhoneBase;

    constructor(options: {
        saved?: boolean
        id?: string,
        name?: string,
        location?: string,
        office?: string,
        phone?: PhoneBase
    } = {}) {
        this.id = options.id || '';
        this.name = options.name || '';
        this.location = options.location || '';
        this.office = options.office || '';
        this.phone = options.phone || <PhoneBase>{};
        this.saved = options.saved || false;
    }
}
