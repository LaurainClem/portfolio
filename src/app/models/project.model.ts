import { TechnologyModel } from './technology.model';

export class ProjectModel {
	title = '';
	description = '';
	images = new Array<ProjectImageModel>();
	frontRepo = '';
	backRepo = '';
	technologies = new Array<TechnologyModel>();
	status = '';
	frontRepository = '';
	backRepository = '';
}

export class ProjectImageModel {
	url = '';
}
