import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-circular-button',
  templateUrl: './circular-button.component.html',
  styleUrls: ['./circular-button.component.css']
})
export class CircularButtonComponent {
  @Input() image: any;
  @Input() title: string = "";
  @Input() color: string = "";
  @Input() color2: string = "";
  @Input() id: string = "";

  @Output() selected = new EventEmitter();

/**
 *
 */
constructor(translate: TranslateService) {
  
}
  setBG(){
    if(this.image==null)
      return "linear-gradient(45deg, "+this.color+","+ this.color2+");"
    else
      return "url(' "+ this.image +" ')"
  }

  selection(value:string){
    this.selected.emit(value);
  }
}
