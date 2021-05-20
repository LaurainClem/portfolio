export class ProjectModel {
	title = '';
	description = '';
	images = new Array<ProjectImageModel>();
	frontRepo = '';
	backRepo = '';
	technologies = new Array<TechnologiesModel>();
	status = '';
	frontRepository = '';
	backRepository = '';
}

export class ProjectImageModel {
	url = '';
}

export class TechnologiesModel {
	label = '';
}
