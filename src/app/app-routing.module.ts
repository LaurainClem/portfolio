import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CursusComponent } from './cursus/cursus.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home',
	},
	{
		path: 'home',
		component: HomeComponent,
		data: { routingState: 'home' },
	},
	{
		path: 'technologies',
		component: TechnologiesComponent,
		data: { routingState: 'technologies' },
	},
	{
		path: 'cursus',
		component: CursusComponent,
		data: { routingState: 'cursus' },
	},
	{
		path: 'projects',
		component: ProjectsComponent,
		data: { routingState: 'projects' },
	},
	{
		path: 'live',
		component: LiveComponent,
		data: { routingState: 'live' },
	},
	{
		path: 'contact',
		component: ContactComponent,
		data: { routingState: 'contact' },
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
