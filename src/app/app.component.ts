import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cama-website';
  currentLanguage: string = 'it';
  changeLanguage(language: any){
    this.currentLanguage = language;
  }
}
