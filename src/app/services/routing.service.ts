import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menuItem.model';

@Injectable({
	providedIn: 'root',
})
export class RoutingService {
	public menuItems: Array<MenuItem> = [
		{
			traductionKey: 'home',
			path: '/home',
		},
		{
			traductionKey: 'technologies',
			path: '/technologies',
		},
		{
			traductionKey: 'cursus',
			path: '/cursus',
		},
		{
			traductionKey: 'projects',
			path: '/projects',
		},
		{
			traductionKey: 'live',
			path: '/live',
		},
		{
			traductionKey: 'contact',
			path: '/contact',
		},
	];

	constructor(private readonly router: Router) {
		this.menuItems[0].active = true;
	}

	redirectTo(path: string = '/'): void {
		this.menuItems.forEach((menuItem) => {
			menuItem.active = false;
		});
		const idMenuItemActive = this.menuItems.findIndex((menuItem) => menuItem.path === path);
		if (idMenuItemActive !== -1) {
			this.menuItems[idMenuItemActive].active = true;
			this.router.navigate([path]);
		}
	}
}
