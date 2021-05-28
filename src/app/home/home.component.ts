import { AnimationOptions } from 'ngx-lottie';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public animationOptions: AnimationOptions = {
		path: '../../assets/img/Blogging.json',
	};

	public messages = new Array<string>();

	constructor(public readonly chat: ChatService, private readonly domSanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.chat.messagesSubject.subscribe((message) => {
			this.messages.push(message);
		});
		this.chat.launchMessagesReception();
	}

	getMessagesContainerHeight() {
		return document.getElementById('messages-container')?.offsetHeight;
	}
}
