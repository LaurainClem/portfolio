import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	hotTechnos = ['typescript', 'docker', 'angular', 'react js', 'nest', 'node js'];

	constructor() {}

	ngOnInit(): void {}
}
