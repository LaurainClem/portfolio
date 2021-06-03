import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProjectsService } from '../services/projects.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
	constructor(
		public readonly projects: ProjectsService,
		private readonly translate: TranslateService,
	) {}

	ngOnInit(): void {
		this.projects.currentCursor = 0;
		this.projects.fetchAllProjects();
		this.translate.onLangChange.subscribe(() => {
			this.projects.fetchAllProjects();
		});
	}

	wheelEventListener(e: any): void {
		console.log('pwet');
		//@ts-ignore
		if (!navigator.userAgentData?.mobile) {
			if (e.deltaY > 0) {
				this.projects.getNextProject();
			} else {
				this.projects.getPrevProject();
			}
		}
	}
}
