import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursusStep } from '../models/cursusStep.model';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CursusService {
	cursusSteps = new Array<CursusStep>();

	constructor(private readonly http: HttpClient) {}

	fetchAllCursusSteps(): void {
		this.http
			.get<CursusStep[]>(`${environment.baseUrl}/cursuses`)
			.subscribe((result: CursusStep[]) => {
				this.cursusSteps = result.reverse();
			});
	}
}
