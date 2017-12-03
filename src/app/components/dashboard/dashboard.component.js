import ko from 'knockout';
import componentTemplate from './dashboard.component.html';
import { HeroService } from '../../services/hero.service';

class DashboardViewModel {
    constructor(params) {
        this.heroService = new HeroService();
        this.heroes = ko.observableArray();
        this.getHeroes();
    }

    getHeroes = () => {
        this.heroes(this.heroService.getHeroes().slice(1, 5));
    }
}

export default { 
    selector: 'app-dashboard', 
    viewModel: DashboardViewModel, 
    template: componentTemplate 
};
