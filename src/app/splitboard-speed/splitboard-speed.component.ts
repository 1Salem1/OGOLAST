import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-speed',
  templateUrl: './splitboard-speed.component.html',
  styleUrls: ['./splitboard-speed.component.css']
})
export class SplitboardSpeedComponent implements OnInit {

  myForm : any ;
  riding_speed : any  ;
  constructor(private shared : SharedService){
  
  }
  
  
  ngOnInit(): void {
  }
  setSlow(){
    this.shared.setRidingSplit('moderate-speed')
  }
  
  setFast(){
    this.shared.setRidingSplit('high-speed')
  }

}
