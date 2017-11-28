import ko from 'knockout';
import componentTemplate from './app.component.html';

class AppViewModel {
    constructor() {
        this.title = ko.observable('Tour of Heroes');
    }
}

export default { 
    selector: 'app-root', 
    viewModel: AppViewModel, 
    template: componentTemplate 
};
