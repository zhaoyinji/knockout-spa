import ko from 'knockout';
import componentTemplate from './hero-detail.component.html';

class HeroDetailViewModel {
    constructor(params) {
        this.hero = params.hero;
    }
}

export default { 
    selector: 'app-hero-detail', 
    viewModel: HeroDetailViewModel, 
    template: componentTemplate 
};
