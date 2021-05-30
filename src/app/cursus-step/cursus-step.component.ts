import { Component, Input, OnInit } from '@angular/core';
import { CursusStep } from '../models/cursusStep.model';

@Component({
	selector: 'app-cursus-step',
	templateUrl: './cursus-step.component.html',
	styleUrls: ['./cursus-step.component.scss'],
})
export class CursusStepComponent implements OnInit {
	@Input() data: CursusStep | undefined;

	constructor() {}

	ngOnInit(): void {}
}
