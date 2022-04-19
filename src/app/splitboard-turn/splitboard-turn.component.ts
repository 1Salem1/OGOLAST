import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-turn',
  templateUrl: './splitboard-turn.component.html',
  styleUrls: ['./splitboard-turn.component.css']
})
export class SplitboardTurnComponent implements OnInit {

  myForm : any ;
riding_speed : any  ;
constructor(private shared : SharedService){

}


ngOnInit(): void {
}
setSlow(){
  this.shared.setRidingSplit('long')
}

setFast(){
  this.shared.setRidingSplit('short')
}

}
