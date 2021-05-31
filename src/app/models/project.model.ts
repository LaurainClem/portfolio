import { TechnologyModel } from './technology.model';

export class ProjectModel {
	title = '';
	description = '';
	image = new ProjectImageModel();
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
