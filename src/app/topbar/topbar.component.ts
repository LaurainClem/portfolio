import { Component } from '@angular/core';
import { LANGS } from 'src/enums/langs.enum';
import { LangsService } from '../services/langs.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
	public langsEnum = LANGS;

	constructor(public readonly langs: LangsService) {}
}
