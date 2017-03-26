"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var address_base_1 = require("./address-base");
var DynamicFormComponent = (function () {
    function DynamicFormComponent() {
        this.rowData = [];
        console.log(this.rowData);
    }
    DynamicFormComponent.prototype.selectRow = function (event) {
        var rowElem = event.currentTarget.parentNode;
        var deleteBtn = document.getElementById('delete');
        if (rowElem.classList.contains('selected')) {
            rowElem.className = '';
            deleteBtn.setAttribute('disabled', '');
        }
        else {
            var rows = rowElem.parentNode.querySelectorAll('tr');
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.className = '';
            }
            rowElem.className = 'selected';
            deleteBtn.removeAttribute('disabled');
        }
    };
    DynamicFormComponent.prototype.addRow = function () {
        var maxId = 0;
        this.rowData.map(function (row) {
            maxId = (parseInt(row.id) > maxId) ? parseInt(row.id) : maxId;
        });
        var newId = maxId + 1;
        this.rowData.push(new address_base_1.AddressBase({ 'id': newId.toString() }));
        document.getElementById('add').setAttribute('disabled', '');
    };
    DynamicFormComponent.prototype.update = function () {
        document.getElementById('add').removeAttribute('disabled');
        var updatedIds = [];
        this.rowData.map(function (row) {
            if (!row.saved) {
                updatedIds.push(row.id);
            }
            row.saved = true;
        });
        alert('Row id ' + updatedIds.join(',') + ' updated!');
    };
    DynamicFormComponent.prototype.deleteRow = function () {
        var selectedRow = document.getElementById('grid-table').querySelectorAll('tr.selected')[0];
        this.rowData = this.rowData.filter(function (row) {
            return (row.id !== selectedRow.id);
        });
        document.getElementById('add').removeAttribute('disabled');
    };
    DynamicFormComponent.prototype.editCellPhone = function (event) {
        event.target.setAttribute('contenteditable', 'true');
        event.target.focus();
    };
    DynamicFormComponent.prototype.cancelEditPhone = function (event) {
        event.target.removeAttribute('contenteditable');
    };
    DynamicFormComponent.prototype.sort = function (event) {
        var sortingField = event.target.innerHTML.toLowerCase();
        var referenceField = event.target.dataset.ref;
        this.rowData.sort(function (a, b) {
            var fieldA = referenceField ? a[referenceField][sortingField] : a[sortingField];
            var fieldB = referenceField ? b[referenceField][sortingField] : b[sortingField];
            if (fieldA > fieldB) {
                return 1;
            }
            else if (fieldA < fieldB) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    return DynamicFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "rowData", void 0);
DynamicFormComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-form',
        templateUrl: './dynamic-form.component.html'
    }),
    __metadata("design:paramtypes", [])
], DynamicFormComponent);
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map