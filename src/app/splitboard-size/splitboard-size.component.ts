import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-size',
  templateUrl: './splitboard-size.component.html',
  styleUrls: ['./splitboard-size.component.css']
})
export class SplitboardSizeComponent implements OnInit {
  visible : boolean = true ;
  myForm :FormGroup;
  tr = false ;
    location: any;
    constructor(private fb : FormBuilder ,private shared:SharedService , private router: Router) { 
      this.myForm = this.fb.group({
        height : '171'
      });
    }  
    ngOnInit(): void {
    
  
      this.myForm.valueChanges.subscribe(() =>{
        this.visible = false ;
     
          let jsonF = JSON.stringify(this.myForm.value);
          var obj = JSON.parse(jsonF);
          this.shared.setHeightSplit(obj.height)
        })
      
      }
    
    bow(){
      this.tr = true;
    }

}
