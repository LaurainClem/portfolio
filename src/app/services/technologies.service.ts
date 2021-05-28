import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TechnologyModel } from '../models/technology.model';

@Injectable({
	providedIn: 'root',
})
export class TechnologiesService {
	public technologiesList = new Array<TechnologyModel>();
	public technologySelected?: TechnologyModel;

	constructor(private readonly http: HttpClient) {}

	fetchAllTechnologies(): void {
		this.http
			.get<Array<TechnologyModel>>(
				`${environment.graphQLBaseUrl}{technologies{label,image{url}}}`,
			)
			.subscribe((result) => {
				this.technologiesList = result;
			});
	}
}
