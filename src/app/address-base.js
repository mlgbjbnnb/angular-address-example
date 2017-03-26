"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBase = (function () {
    function AddressBase(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id || '';
        this.name = options.name || '';
        this.location = options.location || '';
        this.office = options.office || '';
        this.phone = options.phone || {};
        this.saved = options.saved || false;
    }
    return AddressBase;
}());
exports.AddressBase = AddressBase;
//# sourceMappingURL=address-base.js.map