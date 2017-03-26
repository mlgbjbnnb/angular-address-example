import { Component }       from '@angular/core';

import { AddressService }  from './address.service';

import { AddressBase }     from './address-base';

@Component({
  selector: 'my-address',
  template: `
    <div>
      <h2>My Address Book</h2>
      <dynamic-form [rowData]="rowData" ></dynamic-form>
  `,
  providers:  [AddressService]
})
export class AppComponent {
  rowData: AddressBase[];

  constructor(service: AddressService) {
    this.rowData = service.getAddress();
  }
}
