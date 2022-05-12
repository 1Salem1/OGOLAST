export interface Product {
    family: string;
    category: string;
    name: string;
    size: number;
    max_height: number;
    min_height: number;
    max_weight: number,
    min_weight: number;
    ski_level: [];
    playground: [];
    ski_style: [];
    riding_speed: string;
    src : string}
  
  
  export interface info {
    date :  string,
     height : number,
     weight : number ,
     ski_level : string,
     terrain : string,
     ski_style : string,
     rec_ski_1 :string,
     rec_ski_2 : string,
     rec_ski_3 : string,
  }
  
  
  export interface Prediction {
    prediction : number;
    name : string;
    size : number;
    weight : number;
    weight_valid : boolean
    height_valid : boolean
     ski_level_valid : boolean 
     playground_valid : boolean;
     ski_style_valid : boolean;
     riding_speed_valid : boolean ;
     src : string ; }


     export const products = [
        {
         
          name: 'DELIRIUM DIVE 26',
          size: 154,
          max_height: 178,
          min_height: 0,
          max_weight: 60,
          min_weight: 0,
          ski_level: ['confirmed', 'pro-guide'],
          playground: ['touring-mountaineering'],
          ski_style: ['technical-precision'],
          riding_speed: 'high-speed',
          turns : 'long',
          src : "https://ogso-mountain-essentials.com/app/splitboard/delerium.png"
      
        },
        {
         
            name: 'DELIRIUM DIVE 26',
            size: 158,
            max_height: 181,
            min_height: 171,
            max_weight: 60,
            min_weight: 80,
            ski_level: ['confirmed', 'pro-guide'],
            playground: ['touring-mountaineering'],
            ski_style: ['technical-precision'],
            riding_speed: 'high-speed',
            turns : 'long',
            src : "https://ogso-mountain-essentials.com/app/splitboard/delerium.png"
        
          },
          {
         
            name: 'DELIRIUM DIVE 26',
            size: 162,
            max_height: 199,
            min_height: 180,
            max_weight: 80,
            min_weight: 0,
            ski_level: ['confirmed', 'pro-guide'],
            playground: ['touring-mountaineering'],
            ski_style: ['technical-precision'],
            riding_speed: 'moderate-speed',
            turns : 'long',
            src : "https://ogso-mountain-essentials.com/app/splitboard/delerium.png"
        
          },
          {
         
            name: 'VALLUGA 26 ',
            size: 154,
            max_height: 178,
            min_height: 0,
            max_weight: 60,
            min_weight: 0,
            ski_level: ['newbie', 'intermediate'],
            playground: ['touring-back-mountain'],
            ski_style: ['fun-surf'],
            riding_speed: 'moderate-speed',
            turns : 'short',
            src : "https://ogso-mountain-essentials.com/app/splitboard/valluga.png"
        
          },
          {
           
              name: 'VALLUGA 26 ',
              size: 158,
              max_height: 181,
              min_height: 171,
              max_weight: 60,
              min_weight: 80,
              ski_level: ['newbie', 'intermediate'],
              playground: ['touring-back-mountain'],
              ski_style: ['fun-surf'],
              riding_speed: 'moderate-speed',
              turns : 'short',
              src : "https://ogso-mountain-essentials.com/app/splitboard/valluga.png"
          
            },
            {
           
              name: 'VALLUGA 26 ',
              size: 162,
              max_height: 199,
              min_height: 180,
              max_weight: 80,
              min_weight: 0,
              ski_level: ['newbie', 'intermediate'],
              playground: ['touring-back-mountain'],
              ski_style: ['fun-surf'],
              riding_speed: 'moderate-speed',
              turns : 'short',
              src : "https://ogso-mountain-essentials.com/app/splitboard/valluga.png"
          
            }

    ]