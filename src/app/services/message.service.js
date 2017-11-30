import ko from 'knockout';

export class MessageService {
    constructor() {
        this.messages = ko.observableArray([]);
        var localMessages = sessionStorage.getItem('messages');
        if (!!localMessages) {
            this.messages(JSON.parse(localMessages));
            
        }
    }

    add = (message) => {
        this.messages.push(message);
        sessionStorage.setItem('messages', JSON.stringify(this.messages()));
    }

    clear = () => {
        this.messages.removeAll();
        sessionStorage.removeItem('messages');
    }
}