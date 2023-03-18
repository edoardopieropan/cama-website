import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'cama-website';
  currentLanguage: string = 'it';

  ngOnInit(): void {
    if(localStorage.getItem("language"))
      this.currentLanguage = localStorage.getItem("language")!;
  }

  changeLanguage(language: any){
    localStorage.setItem("language", language);
    this.currentLanguage = language;
  }
}
