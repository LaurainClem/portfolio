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

	constructor(private readonly http: HttpClient) {}

	fetchAllTechnologies(): void {
		this.http
			.get<Array<TechnologiesModel>>(`${environment.baseUrl}/technologies`)
			.subscribe((result) => {
				this.technologiesList = result;
			});
	}
}
