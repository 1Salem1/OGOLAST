import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-splitboard-height',
  templateUrl: './splitboard-height.component.html',
  styleUrls: ['./splitboard-height.component.css']
})
export class SplitboardHeightComponent implements OnInit {

  visible : boolean = true ;
  height : string  = '';
   myForm: FormGroup;
   tr = false;
  
  
    constructor(private fb : FormBuilder, private shared :SharedService) { 
      this.myForm = this.fb.group({
        weight : '85'
      });
      
    }
  
    ngOnInit(): void {
    
  
      this.myForm.valueChanges.subscribe(() =>{
        this.visible = false ;
     
          let jsonF = JSON.stringify(this.myForm.value);
          var obj = JSON.parse(jsonF);
          this.shared.setWeightSplit(obj.weight)
        })
       
    }
    bow(){
      this.tr = true;
    }

}
