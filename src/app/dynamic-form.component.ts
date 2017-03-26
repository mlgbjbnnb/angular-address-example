import { Component, Input }  from '@angular/core';
import { AddressBase }       from './address-base';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {
  @Input() rowData: AddressBase[] = [];

  constructor() {
    console.log(this.rowData);
  }

  selectRow(event: any): any {
    let rowElem = event.currentTarget.parentNode;
    let deleteBtn = document.getElementById('delete');
    if (rowElem.classList.contains('selected')) {
      rowElem.className = '';
      deleteBtn.setAttribute('disabled', '');
    } else {
      let rows = rowElem.parentNode.querySelectorAll('tr');
      for (let row of rows) {
        row.className = '';
      }
      rowElem.className = 'selected';
      deleteBtn.removeAttribute('disabled');
    }
  }

  addRow() {
    let maxId: number = 0;
    this.rowData.map((row) => {
      maxId = (parseInt(row.id) > maxId) ? parseInt(row.id) : maxId;
    });
    let newId: number = maxId + 1;
    this.rowData.push(new AddressBase({'id': newId.toString()}));
    document.getElementById('add').setAttribute('disabled', '');
  }

  update() {
    document.getElementById('add').removeAttribute('disabled');
    let updatedIds: string[] = [];
    this.rowData.map((row) => {
      if (!row.saved) {
        updatedIds.push(row.id);
      }
      row.saved = true;
    });
    alert('Row id ' + updatedIds.join(',') + ' updated!');
  }

  deleteRow() {
    let selectedRow = document.getElementById('grid-table').querySelectorAll('tr.selected')[0];

    this.rowData = this.rowData.filter((row) => {
      return (row.id !== selectedRow.id);
    });
    document.getElementById('add').removeAttribute('disabled');
  }

  editCellPhone(event: any) {
    event.target.setAttribute('contenteditable', 'true');
    event.target.focus();
  }

  cancelEditPhone(event: any) {
    event.target.removeAttribute('contenteditable');
  }

  sort(event: any) {
    let sortingField = event.target.innerHTML.toLowerCase();
    let referenceField = event.target.dataset.ref;
    this.rowData.sort((a, b) => {
      let fieldA = referenceField ? a[referenceField][sortingField] : a[sortingField];
      let fieldB = referenceField ? b[referenceField][sortingField] : b[sortingField];
      if (fieldA > fieldB) {
        return 1;
      } else if (fieldA < fieldB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
