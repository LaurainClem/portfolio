import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LANGS } from 'src/static/langs.enum';
import { LangsService } from '../services/langs.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
	public langsEnum = LANGS;

	@Input() isMenuOpen = false;
	@Output() isMenuOpenChange = new EventEmitter<boolean>();

	constructor(public readonly langs: LangsService) {}

	changeMenuStatus(): void {
		this.isMenuOpenChange.emit(!this.isMenuOpen);
	}
}
