import ko from 'knockout';
import componentTemplate from './heroes.component.html';
import { HeroService } from '../../services/hero.service';

class HerosViewModel {
    constructor(params) {
        this.heroService = new HeroService();
        this.heroes = ko.observableArray();
        this.heroes(this.heroService.getHeroes());
    }

    onSelect = (hero) => {
        this.selectedHero(hero);
    }

    getHeroes = () => {
        this.heroService.getHeroes(heores => {
            this.heroes(heores);
        })
    }

    
}

export default { 
    selector: 'app-heroes', 
    viewModel: HerosViewModel, 
    template: componentTemplate 
};
