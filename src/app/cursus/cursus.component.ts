import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CursusStep } from '../models/cursusStep.model';
import { CursusService } from '../services/cursus.service';

@Component({
	selector: 'app-cursus',
	templateUrl: './cursus.component.html',
	styleUrls: ['./cursus.component.scss'],
})
export class CursusComponent implements OnInit {
	public cursusSteps = new Array<CursusStep>();

	constructor(public readonly cursus: CursusService, private translate: TranslateService) {}

	ngOnInit(): void {
		this.cursus.cursusSubject.subscribe((result) => {
			this.cursusSteps.push(result);
		});
		this.translate.onLangChange.subscribe(() => {
			this.cursusSteps = [];
			this.cursus.fetchAllCursusSteps();
		});
		this.cursus.fetchAllCursusSteps();
	}
}
