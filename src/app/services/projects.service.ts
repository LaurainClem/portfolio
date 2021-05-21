import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel, TechnologiesModel } from '../models/project.model';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	public projectsList = new Array<ProjectModel>();

	constructor(private readonly http: HttpClient) {}

	fetchAllProjects(local: string = 'en'): void {
		this.http
			.get<ProjectModel[]>(`${environment.baseUrl}/projects?_locale=${local}`)
			.subscribe((result) => {
				this.projectsList = result;
			});
	}
}
