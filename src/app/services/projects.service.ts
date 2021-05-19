import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.model';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	constructor(private readonly http: HttpClient) {}

	fetchAllProjects(): Observable<ProjectModel[]> {
		return this.http.get<ProjectModel[]>(
			`${environment.graphQLBaseUrl}{projects{title,images{url}}}`,
		);
	}
}
