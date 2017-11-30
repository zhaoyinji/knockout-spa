import ko from 'knockout';
import componentTemplate from './messages.component.html';
import { MessageService } from '../../services/message.service';

class MessagesViewModel {
    constructor(params) {
        this.messageService = new MessageService();
    }
}

export default { 
    selector: 'app-messages', 
    viewModel: MessagesViewModel, 
    template: componentTemplate 
};
