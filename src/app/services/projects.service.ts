import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.model';
import { TechnologiesService } from './technologies.service';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	private projectsList = new Array<ProjectModel>();

	constructor(
		private readonly http: HttpClient,
		private readonly technolgies: TechnologiesService,
	) {}

	fetchAllProjects(local: string = 'en'): void {
		this.http
			.get<ProjectModel[]>(`${environment.baseUrl}/projects?_locale=${local}`)
			.subscribe((result) => {
				this.projectsList = result;
			});
	}

	getProjectListsFiltered(): Array<ProjectModel> {
		if (this.technolgies.technologySelected === undefined) {
			return this.projectsList;
		} else {
			return this.projectsList.filter(
				(project) =>
					project.technologies.findIndex(
						(technology) =>
							technology.label === this.technolgies.technologySelected?.label,
					) !== -1,
			);
		}
	}
}
