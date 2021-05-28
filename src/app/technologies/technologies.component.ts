import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TechnologiesService } from '../services/technologies.service';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
	public baseUrl = environment.baseUrl;

	constructor(public readonly technologies: TechnologiesService) {}

	ngOnInit(): void {
		this.technologies.fetchAllTechnologies();
	}
}
