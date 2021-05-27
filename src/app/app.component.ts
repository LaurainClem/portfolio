import { Component, OnInit } from '@angular/core';
import { LangsService } from './services/langs.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public isMenuOpen = false;

	constructor(private readonly langs: LangsService) {}

	ngOnInit(): void {
		this.langs.changeCurrentLanguage();
	}
}
