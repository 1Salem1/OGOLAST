import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-skiing-style',
  templateUrl: './splitboard-skiing-style.component.html',
  styleUrls: ['./splitboard-skiing-style.component.css']
})
export class SplitboardSkiingStyleComponent implements OnInit {

  visible : boolean = true ;
  location: any;


  constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
  
  }  
  ngOnInit(): void {
    


  }
  onChange(x: string){
 




  }

  couloire(){
    this.shared.setSkiStyleSplit('fun-surf')
  }
  freeride(){
          this.shared.setSkiStyleSplit('high-speed')
  }

}
