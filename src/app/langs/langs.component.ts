import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProjectsService } from '../services/projects.service';

@Component({
	selector: 'app-langs',
	templateUrl: './langs.component.html',
	styleUrls: ['./langs.component.scss'],
})
export class LangsComponent implements OnInit {
	constructor(private readonly translate: TranslateService, private projects: ProjectsService) {}

	ngOnInit(): void {}

	setFrenchDefault(): void {
		this.translate.setDefaultLang('fr');
		this.projects.fetchAllProjects('fr');
	}

	setEnglishDefault(): void {
		this.translate.setDefaultLang('en');
		this.projects.fetchAllProjects('en');
	}
}
