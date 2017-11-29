import ko from 'knockout';
import AppComponent from './app.component';
import HerosComponent from './components/heros/heros.component';
import HeroDetailComponent from './components/hero-detail/hero-detail.component';

function registerComponent(targetComponent) {
    ko.components.register(targetComponent.selector, {
        viewModel: targetComponent.viewModel,
        template: targetComponent.template
    })
};

registerComponent(HeroDetailComponent);
registerComponent(HerosComponent);
registerComponent(AppComponent);
