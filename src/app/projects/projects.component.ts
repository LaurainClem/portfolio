import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';
import { TechnologiesService } from '../services/technologies.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	public projectsList = new Array<ProjectModel>();
	public environnement = environment;

	constructor(
		public readonly projects: ProjectsService,
		public readonly technologies: TechnologiesService,
		private readonly translate: TranslateService,
	) {}

	ngOnInit(): void {
		this.projects.fetchAllProjects(this.translate.getBrowserLang() === 'fr' ? 'fr' : undefined);
		this.technologies.fetchAllTechnologies();
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

	getCarouselHeight(): number {
		return window.innerWidth <= 1280 ? 200 : 400;
	}
}
