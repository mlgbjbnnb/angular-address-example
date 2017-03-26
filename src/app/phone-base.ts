export class PhoneBase{
    office: string;
    cell: string;

    constructor(options: {
        office?: string,
        cell?: string,
    } = {}) {
        this.office = options.office || '';
        this.cell = options.cell || '';
    }
}