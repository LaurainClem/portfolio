import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MESSAGES } from 'src/static/messages.const';

@Injectable({
	providedIn: 'root',
})
export class ChatService {
	messagesSubject = new Subject<string>();

	messages = MESSAGES;

	constructor() {}

	launchMessagesReception(): void {
		this.messagesSubject.next(this.messages[0]);
		setTimeout(() => {
			this.messagesSubject.next(this.messages[1]);
			/* setTimeout(() => {
				this.messagesSubject.next(this.messages[2]);
			}, 4000); */
		}, 2200);
	}
}
