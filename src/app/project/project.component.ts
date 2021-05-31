import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
	@Input() data: ProjectModel | undefined;
	environment = environment;

	constructor() {}

	ngOnInit(): void {}
}
