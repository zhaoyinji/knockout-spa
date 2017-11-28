import ko from 'knockout';
import AppComponent from './app.component';
import HerosComponent from './components/heros/heros.component';

ko.components.register(HerosComponent.selector, {
    viewModel: HerosComponent.viewModel,
    template: HerosComponent.template
})

ko.components.register(AppComponent.selector, {
    viewModel: AppComponent.viewModel,
    template: AppComponent.template
})
