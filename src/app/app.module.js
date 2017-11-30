import ko from 'knockout';
import AppComponent from './app.component';
import HerosComponent from './components/heros/heros.component';
import HeroDetailComponent from './components/hero-detail/hero-detail.component';
import MessagesComponent from './components/messages/messages.component';

const components = [
    AppComponent,
    HerosComponent,
    MessagesComponent,
    HeroDetailComponent
];

for (const targetComponent of components) {
    ko.components.register(targetComponent.selector, {
        viewModel: targetComponent.viewModel,
        template: targetComponent.template
    })
}
