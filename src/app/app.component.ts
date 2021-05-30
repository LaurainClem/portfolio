import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangsService } from './services/langs.service';
import { first, take } from 'rxjs/operators';
import { RoutingService } from './services/routing.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				query(':enter, :leave', style({ position: 'fixed', width: '80%', height: '80vh' })),
				group([
					query(':enter', [
						style({ transform: 'translateY(100%)' }),
						animate('0.5s ease', style({ transform: 'translateY(0%)' })),
					]),
					query(':leave', [
						style({ transform: 'translateY(0%)' }),
						animate('0.5s ease', style({ transform: 'translateY(-100%)' })),
					]),
				]),
			]),
		]),
	],
})
export class AppComponent implements OnInit {
	public isMenuOpen = false;

	constructor(
		private readonly langs: LangsService,
		private readonly router: Router,
		private readonly routing: RoutingService,
	) {}

	ngOnInit(): void {
		this.langs.changeCurrentLanguage();
		this.router.events.pipe(take(1)).subscribe((event) => {
			console.log((event as any).url);
			this.routing.redirectTo((event as any).url);
		});
	}

	getState(outlet: any) {
		return outlet.activatedRouteData.routingState;
	}
}
