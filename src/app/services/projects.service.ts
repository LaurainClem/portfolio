import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.model';
import { TechnologiesService } from './technologies.service';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	private projectsList = new Array<ProjectModel>();
	public currentCursor = 0;

	constructor(
		private readonly http: HttpClient,
		private readonly technolgies: TechnologiesService,
		private readonly translate: TranslateService,
	) {}

	fetchAllProjects(): void {
		this.http
			.get<ProjectModel[]>(
				`${environment.baseUrl}/projects?_locale=${this.translate.currentLang}`,
			)
			.subscribe((result) => {
				this.projectsList = result;
				console.log(this.projectsList);
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

	getProject(index: number) {
		if (index + 1 > this.projectsList.length)
			return this.projectsList[this.projectsList.length - 1];
		if (index + 1 < 0) return this.projectsList[0];
		return this.projectsList[index];
	}

	getNextProject(): void {
		if (this.currentCursor + 1 < this.projectsList.length) this.currentCursor++;
	}

	getPrevProject(): void {
		if (this.currentCursor > 0) this.currentCursor--;
	}

	getProjectsListLength(): number {
		return this.projectsList.length;
	}
}
