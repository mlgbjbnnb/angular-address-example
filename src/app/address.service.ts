import { Injectable }       from '@angular/core';

import { AddressBase }     from './address-base';

@Injectable()
export class AddressService {

    // Todo: get from a remote source of address metadata
    // Todo: make asynchronous
    getAddress() {

        let addresses: AddressBase[] = [
            new AddressBase({
                'saved': true,
                'id': '1',
                'name': 'John',
                'location': 'Shanghai',
                'office': 'C-103',
                'phone': {
                    'office': '666666',
                    'cell': '888888'
                }
            }),
            new AddressBase({
                'saved': true,
                'id': '2',
                'name': 'Bob',
                'location': 'Beijing',
                'office': 'D-103',
                'phone': {
                    'office': '333333',
                    'cell': '999999'
                }
            }),
        ];

        return addresses.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
}
