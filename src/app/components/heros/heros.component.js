import ko from 'knockout';
import componentTemplate from './heros.component.html';
//import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';

class HerosViewModel {
    constructor() {
        this.heroes = ko.observableArray(HEROES);
        this.selectedHero = ko.observable(null);
    }

    onSelect = (hero) => {
        this.selectedHero(hero);
    }
}

export default { 
    selector: 'app-heroes', 
    viewModel: HerosViewModel, 
    template: componentTemplate 
};
