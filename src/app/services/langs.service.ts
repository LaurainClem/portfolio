import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGS } from 'src/static/langs.enum';

@Injectable({
	providedIn: 'root',
})
export class LangsService {
	constructor(private readonly translate: TranslateService) {}

	changeCurrentLanguage(lang?: LANGS): void {
		const currentLang = lang !== undefined ? LANGS[lang] : this.translate.getBrowserLang();
		this.translate.setDefaultLang(currentLang);
	}
}
