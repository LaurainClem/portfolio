import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	@Input() isMenuOpen = false;
	@Output() isMenuOpenChange = new EventEmitter<boolean>();

	constructor(public readonly routing: RoutingService) {}

	ngOnInit(): void {}

	changeMenuState(path: string): void {
		this.isMenuOpenChange.emit(!this.isMenuOpen);
		this.routing.redirectTo(path);
	}
}
