import { Component, OnInit } from '@angular/core';
import { CursusStep } from '../models/cursusStep.model';
import { CursusService } from '../services/cursus.service';

@Component({
	selector: 'app-cursus',
	templateUrl: './cursus.component.html',
	styleUrls: ['./cursus.component.scss'],
})
export class CursusComponent implements OnInit {
	constructor(public readonly cursus: CursusService) {}

	ngOnInit(): void {
		this.cursus.fetchAllCursusSteps();
	}
}
