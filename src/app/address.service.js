"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var address_base_1 = require("./address-base");
var AddressService = (function () {
    function AddressService() {
    }
    // Todo: get from a remote source of address metadata
    // Todo: make asynchronous
    AddressService.prototype.getAddress = function () {
        var addresses = [
            new address_base_1.AddressBase({
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
            new address_base_1.AddressBase({
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
        return addresses.sort(function (a, b) { return parseInt(a.id) - parseInt(b.id); });
    };
    return AddressService;
}());
AddressService = __decorate([
    core_1.Injectable()
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map