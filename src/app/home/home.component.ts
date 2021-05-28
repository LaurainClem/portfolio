import { AnimationOptions } from 'ngx-lottie';
import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnChanges,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
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

	constructor(public readonly chat: ChatService) {}
	public height = 0;
	ngOnInit(): void {
		this.chat.messagesSubject.subscribe((message) => {
			this.messages.push(message);

			setTimeout(() => {
				if (document.getElementById('avatarContainer')) {
					console.log(document.getElementById('messages')?.offsetHeight);
					//@ts-ignore
					document.getElementById('avatarContainer')?.style.height = `${
						document.getElementById('messages')?.offsetHeight
					}px`;
				}
			}, 1000);

			console.log(message);
		});
		this.chat.launchMessagesReception();
	}
}
