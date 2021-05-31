import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursusStep } from '../models/cursusStep.model';
import { environment } from '../../environments/environment';
import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LangsService } from './langs.service';

@Injectable({
	providedIn: 'root',
})
export class CursusService {
	public cursusSteps = new Array<CursusStep>();
	public cursusSubject = new Subject<CursusStep>();

	constructor(private readonly http: HttpClient, private readonly langs: LangsService) {}

	fetchAllCursusSteps(): void {
		this.http
			.get<CursusStep[]>(
				`${environment.baseUrl}/cursuses?_locale=${this.langs.getCurrentLanguage()}`,
			)
			.subscribe((result: CursusStep[]) => {
				this.cursusSteps = result.reverse();
			});
	}
}
