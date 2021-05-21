import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';
import { TechnologiesService } from '../services/technologies.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	constructor(
		public readonly projects: ProjectsService,
		public technologies: TechnologiesService,
	) {}

	ngOnInit(): void {
		this.projects.fetchAllProjects();
		this.technologies.fetchAllTechnologies();
		this.technologies.technologySelected = undefined;
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
