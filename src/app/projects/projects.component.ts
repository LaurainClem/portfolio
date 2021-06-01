import { Component, OnInit } from '@angular/core';
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
		this.projects.fetchAllProjects();
		this.translate.onLangChange.subscribe(() => {
			this.projects.fetchAllProjects();
		});
		window.addEventListener('wheel', (e: any) => {
			console.log(e);
			if (e.deltaY > 0) {
				this.projects.getNextProject();
			} else {
				this.projects.getPrevProject();
			}
		});
	}
}
