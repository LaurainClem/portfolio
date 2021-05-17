import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss'],
})
export class LangsComponent implements OnInit {
  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {}

  setFrenchDefault(): void {
    this.translate.setDefaultLang('fr');
  }

  setEnglishDefault(): void {
    this.translate.setDefaultLang('en');
  }
}
