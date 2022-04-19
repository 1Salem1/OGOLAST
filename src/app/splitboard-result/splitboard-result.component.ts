import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { products } from '../splitboard';

@Component({
  selector: 'app-splitboard-result',
  templateUrl: './splitboard-result.component.html',
  styleUrls: ['./splitboard-result.component.css']
})
export class SplitboardResultComponent implements OnInit {

  height : number = 0
  weight : number = 0
  ski_level: string = '';
  terrain: string = '';
  ski_style : string = '';
  riding_speed: string = '';
  rec_height : number = 0 ;
  rec_ski_name : string = '';
   result: Array<any> =[];
   result_filt: Array<any> =[];
   predicted_value :number = 0;
  weight_valid: boolean = false ;
  height_valid: boolean = false ;
  ski_level_valid: boolean = false;
  playground_valid: boolean = false;
  riding_speed_valid: boolean = false;
  size: number = 0;
  data : Array<any> = [];
  options: Object = {
    keys: ['date','height','weight' ]
  };
  constructor(private shared : SharedService) { }   
  ngOnInit(): void {
    
   this.height = this.shared.getHeightSplit()
   this.weight = this.shared.getWeightSplit()
   this.ski_level = this.shared.getSkiLevelSplit()
   this.terrain = this.shared.getTerrainTypeSplit()
   this.ski_style = this.shared.getSkiStyleSplit()
   this.riding_speed = this.shared.getRidingSplit()
   
console.log(this.height)
console.log(this.weight)
console.log(this.ski_level)
console.log(this.terrain)
console.log(this.ski_style)
console.log(this.riding_speed)


   for (var ski of products){

   
     if ((this.height >= ski.min_height && this.height <= ski.max_height)  ){
    this.predicted_value += 120
    this.height_valid = true ;
     }
     else {
      this.predicted_value -= 150
    }
    if (this.weight >= ski.min_weight && this.weight <= ski.max_weight){
      this.predicted_value += 10
      this.weight_valid = true ;
    }
     
 

   
     if( (ski.ski_level.indexOf(this.ski_level) > -1) &&  (ski.playground.indexOf(this.terrain) > -1) && (ski.ski_style.indexOf(this.ski_style) > -1)&& (ski.ski_style.indexOf(this.ski_style) > -1)){
      this.predicted_value += 100
      this.ski_level_valid = true ;
     }
     if (ski.playground.indexOf(this.terrain) > -1){
      this.predicted_value += 10
      this.playground_valid = true;
     }
     if (ski.ski_style.indexOf(this.ski_style) > -1){
      this.predicted_value += 10
      this.ski_level_valid = true;
     }

     this.result.push({
       prediction : this.predicted_value,
       name : ski.name,
       size : ski.size,
       weight : this.weight,
       weight_valid : this.weight_valid,
       height_valid : this.height_valid,
       ski_level_valid : this.ski_level_valid, 
       playground_valid : this.playground_valid,
       ski_style_valid : this.ski_level_valid,
       riding_speed_valid : this.riding_speed_valid,
       src : ski.src
     })
     this.predicted_value = 0;
     this.height_valid = false;



   }

   this.result.sort(function(a ,b){ 
   
   if(b.prediction == a.prediction){
     return (b.size - a.size)
   }
   
    return b.prediction - a.prediction
  })

  
  this.result_filt = this.result.filter(x =>x.height_valid == true)
console.log(this.result)


  this.data.push ({
    date :  new Date().toISOString().slice(0, 10),
   height : this.height,
   weight : this.weight ,
   splitLevel_level : this.ski_level,
   terrain : this.terrain,
   ski_style : this.ski_style,
   rec_splitboard : this.result[0].name,

  })
}
}
