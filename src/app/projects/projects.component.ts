import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	projectsList: ProjectModel[] = [];

	constructor(private readonly projects: ProjectsService) {}

	ngOnInit(): void {
		this.projects.fetchAllProjects().subscribe(
			(result) => {
				console.log(result);
				this.projectsList = result;
			},
			(error) => {
				console.error(error);
			},
		);
	}

	getImageUrl(partialImageUrl: string): string {
		return 'http://167.172.177.134:1337' + partialImageUrl;
	}

	getClassStatusTag(status: string): string {
		if (status === 'done') {
			return 'border-green-600';
		}
		if (status === 'inProgress') {
			return 'border-yellow-500';
		}
		if (status === 'design') {
			return 'border-purple-600';
		}
		return '';
	}
}
