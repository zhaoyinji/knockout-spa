import ko from 'knockout';
import componentTemplate from './heros.component.html';
import { Hero } from '../../models/hero';

class HerosViewModel {
    constructor() {
        this.hero = new Hero(1, 'Windstorm');
    }
}

export default { 
    selector: 'app-heroes', 
    viewModel: HerosViewModel, 
    template: componentTemplate 
};
