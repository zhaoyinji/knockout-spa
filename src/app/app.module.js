import ko from 'knockout';
import { Router } from 'ko-component-router';
import AppComponent from './app.component';
import DashboardComponent from './components/dashboard/dashboard.component';
import HeroesComponent from './components/heroes/heroes.component';
import HeroDetailComponent from './components/hero-detail/hero-detail.component';

Router.setConfig({
    hashbang: true
})
Router.useRoutes({
    '/': DashboardComponent.selector,
    '/dashboard': DashboardComponent.selector,
    '/heroes': {
        '/': HeroesComponent.selector,
        '/:id': HeroDetailComponent.selector
    }
})

const components = [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
];

for (const targetComponent of components) {
    ko.components.register(targetComponent.selector, {
        viewModel: targetComponent.viewModel,
        template: targetComponent.template
    })
}
