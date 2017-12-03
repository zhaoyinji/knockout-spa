import ko from 'knockout';
import componentTemplate from './hero-detail.component.html';
import { HeroService } from '../../services/hero.service';
import { Router } from 'ko-component-router';

class HeroDetailViewModel {
    constructor(ctx) {
        this.heroService = new HeroService();
        this.hero = ko.observable(null);
        this.getHero(ctx.params.id);
    }

    getHero = (id) => {
        this.hero(this.heroService.getHero(id));
    }

    goBack = () => {
        window.history.back();
    }
}

export default { 
    selector: 'app-hero-detail', 
    viewModel: HeroDetailViewModel, 
    template: componentTemplate 
};
