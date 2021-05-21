import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TechnologiesModel } from '../models/project.model';
import { ProjectsService } from './projects.service';

@Injectable({
	providedIn: 'root',
})
export class TechnologiesService {
	public technologiesList = new Array<TechnologiesModel>();
	public technologySelected?: TechnologiesModel;

	constructor(private readonly http: HttpClient, private readonly projects: ProjectsService) {}

	fetchAllTechnologies(): void {
		this.http
			.get<Array<TechnologiesModel>>(`${environment.graphQLBaseUrl}{technologies{label}}`)
			.subscribe((result) => {
				this.technologiesList = result;
			});
	}
}
