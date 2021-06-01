import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LangsService } from './services/langs.service';
import { first, take } from 'rxjs/operators';
import { RoutingService } from './services/routing.service';
import { ProjectsService } from './services/projects.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				query(
					':enter, :leave',
					style({ position: 'fixed', width: '80%', height: '80vh' }),
					{ optional: true },
				),
				group([
					query(
						':enter',
						[
							style({ transform: 'translateY(100%)' }),
							animate('0.5s ease', style({ transform: 'translateY(0%)' })),
						],
						{ optional: true },
					),
					query(
						':leave',
						[
							style({ transform: 'translateY(0%)' }),
							animate('0.5s ease', style({ transform: 'translateY(-100%)' })),
						],
						{ optional: true },
					),
				]),
			]),
		]),
	],
})
export class AppComponent implements OnInit {
	public isMenuOpen = false;
	public isProjectNavShowed = false;
	//@ts-ignore
	public isMobile = navigator.userAgentData?.mobile;
	/* navigator.userAgentData.mobile */
	constructor(
		private readonly langs: LangsService,
		private readonly router: Router,
		private readonly routing: RoutingService,
		public readonly projects: ProjectsService,
	) {}

	ngOnInit(): void {
		this.langs.changeCurrentLanguage();
		this.router.events.pipe(take(1)).subscribe((event) => {
			this.routing.redirectTo((event as any).url);
		});
		this.router.events.subscribe((event: any) => {
			if (event instanceof NavigationEnd && event.url === '/projects') {
				this.isProjectNavShowed = true;
			} else if (event instanceof NavigationEnd) {
				this.isProjectNavShowed = false;
			}
		});
	}

	getState(outlet: any) {
		return outlet.activatedRouteData.routingState;
	}

	getActualYear(): number {
		return new Date().getFullYear();
	}
}
