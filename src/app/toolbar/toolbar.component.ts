import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  translate: any;
  @Output() changeLanguage = new EventEmitter<string>();
  @Input() currentLanguage: string= 'it';
  /**
   *
   */
   constructor(translate: TranslateService) {
    this.translate = translate;
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang(this.currentLanguage);
  }

  languageDisabled(language:string){
    return language == this.currentLanguage;
  }

  setLanguage(language: string){
    this.currentLanguage = language;
    this.changeLanguage.emit(language);
  }
  scroll() {
    console.log('scrolling to');
    let el = document.getElementById("contacts") as HTMLElement;
    el.scrollIntoView();
  }
}
