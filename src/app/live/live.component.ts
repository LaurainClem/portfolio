import { Component, OnInit } from '@angular/core';

declare let Twitch: any;

@Component({
	selector: 'app-live',
	templateUrl: './live.component.html',
	styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
	player: unknown;
	constructor() {}

	ngOnInit(): void {
		this.player = new Twitch.Player('twitch-embed', {
			channel: 'clemcode',
			height: (window.innerWidth * (3 / 5)) / 2,
			width: window.innerWidth * (3 / 5),
			autoplay: true,
			muted: true,
		});

		window.addEventListener('resize', (event) => {
			document.getElementsByTagName('iframe')[0].height = (
				(window.innerWidth * (3 / 5)) /
				2
			).toString();
			document.getElementsByTagName('iframe')[0].width = (window.innerWidth * (3 / 5)).toString();
		});
	}
}
