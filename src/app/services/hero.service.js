import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';

export class HeroService {
    constructor(messageService) {
        this.messageService = new MessageService();
    }

    getHeroes = () => {
        this.messageService.add('HeroService: fetched heroes');
        return HEROES;
    }
}