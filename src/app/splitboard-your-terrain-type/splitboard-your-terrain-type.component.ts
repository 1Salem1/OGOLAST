import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-your-terrain-type',
  templateUrl: './splitboard-your-terrain-type.component.html',
  styleUrls: ['./splitboard-your-terrain-type.component.css']
})
export class SplitboardYourTerrainTypeComponent implements OnInit {

  myForm: any;

  constructor(private shared:SharedService , private router: Router) { 
  }

  ngOnInit(): void {
  }
  onChange(x: string){
    
  }
tfm(){
  this.shared.setTerrainTypeSplit('touring-front-mountain')
}
tbm(){
  this.shared.setTerrainTypeSplit('touring-back-mountain')
}
tm(){
  this.shared.setTerrainTypeSplit('touring-mountaineering')
}
tr(){
  this.shared.setTerrainTypeSplit('touring-race')
}
}
