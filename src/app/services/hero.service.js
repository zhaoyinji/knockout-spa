import { HEROES } from '../models/mock-heroes';

export class HeroService {
    constructor() {
    }

    getHeroes() {
        return HEROES;
    }

    getHero(id) {
        return HEROES.find(hero => hero.id() == id);
    }
}