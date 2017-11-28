import ko from 'knockout';

export class Hero {
    constructor(id, name) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
    }
}
  