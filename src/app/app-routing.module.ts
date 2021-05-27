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
	},
	{
		path: 'technologies',
		component: TechnologiesComponent,
	},
	{
		path: 'cursus',
		component: CursusComponent,
	},
	{
		path: 'projects',
		component: ProjectsComponent,
	},
	{
		path: 'live',
		component: LiveComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
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
