import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	projectsList = [];

	constructor(private readonly projects: ProjectsService) {}

	ngOnInit(): void {
		this.projects.fetchAllProjects().subscribe(
			(result) => {
				console.log('ProjectsComponent', result);
			},
			(error) => {
				console.error(error);
			},
		);
	}
}
