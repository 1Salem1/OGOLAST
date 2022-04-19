import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  Terrain_type : string = ''
   height: number = 0 ;
   weight: number = 0;
   ski_level:string =''
   ski_style : string = ''
  riding_speed: string = '';
  constructor() { }
  setHeight(data: number){
    this.height = data

  }
  setHeightSplit(data: number){
    this.height = data

  }

  getHeight(){
    return this.height;
  }
  getHeightSplit(){
    return this.height;
  }


  setWeight(data: number){
    this.weight = data

  }
  getWeight(){
    return this.weight;
  }

  setWeightSplit(data: number){
    this.weight = data

  }
  getWeightSplit(){
    return this.weight;
  }


  setSkilevel(data: string){
    this.ski_level = data

  }
  getSkiLevel(){
    return this.ski_level;
  }

  setSkilevelSplit(data: string){
    this.ski_level = data

  }
  getSkiLevelSplit(){
    return this.ski_level;
  }

  setTerrainTypeSplit(data: string){
    this.Terrain_type = data

  }
  getTerrainTypeSplit(){
    return this.Terrain_type;
  }

  setTerrainType(data: string){
    this.Terrain_type = data

  }
  getTerrainType(){
    return this.Terrain_type;
  }

  setSkiStyleSplit(data: string){
    this.ski_style = data

  }
  getSkiStyleSplit(){
    return this.ski_style;
  }


  
  setSkiStyle(data: string){
    this.ski_style = data

  }
  getSkiStyle(){
    return this.ski_style;
  }
  setRiding(data: string){
    this.riding_speed = data

  }
  getRiding(){
    return this.riding_speed;
  }

  setRidingSplit(data: string){
    this.riding_speed = data

  }
  getRidingSplit(){
    return this.riding_speed;
  }

}
