import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnChanges {
  @Input() language: string = 'it';

  customizeImage:string;
  selectedMarble="onice";
  selectedColor="black";
  translate: any;
  constructor(translate: TranslateService) {
    this.translate = translate;
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang(this.language);
    this.customizeImage=this.getImageName(this.selectedMarble, this.selectedColor);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.translate.use(changes['language'].currentValue);
    console.log(this.language)
  }
  ngOnInit(){
  }

  selectionStyle(event:any){
    if(["black", "white", "gold", "green"].includes(event))
      this.selectedColor = event;
    else
      this.selectedMarble = event;

    this.customizeImage = this.getImageName(this.selectedMarble, this.selectedColor);
  }

  getImageName(marble:string, color:string){
    return `assets/images/preview/${marble}_${color}.png`;
  }




  
}
