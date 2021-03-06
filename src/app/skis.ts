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
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 46,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPEARHEAD.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 164,
    max_height: 174,
    min_height: 159,
    max_weight: 58,
    min_weight: 46,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow' ,
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPEARHEAD.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 172,
    max_height: 182,
    min_height: 167,
    max_weight: 71,
    min_weight: 59,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
     src : "https://ogso-mountain-essentials.com/app/ski-photos/SPEARHEAD.png"
  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 180,
    max_height: 190,
    min_height: 175,
    max_weight: 85,
    min_weight: 72,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow' ,
     src : "https://ogso-mountain-essentials.com/app/ski-photos/SPEARHEAD.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 188,
    max_height: 193,
    min_height: 183,
    max_weight: 999,
    min_weight: 85,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPEARHEAD.png"


  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 160,
    max_height: 165,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/COSMIQUE.png'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 168,
    max_height: 173,
    min_height: 163,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/COSMIQUE.png'



  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 176,
    max_height: 181,
    min_height: 171,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/COSMIQUE.png'



  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 184,
    max_height: 189,
    min_height: 179,
    max_weight: 90,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/COSMIQUE.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 192,
    max_height: 197,
    min_height: 187,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/COSMIQUE.png'


  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 162,
    max_height: 157,
    min_height: 167,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/SCHWARZTOR.png'


  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 170,
    max_height: 175,
    min_height: 165,
    max_weight: 68,
    min_weight: 55,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/SCHWARZTOR.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 178,
    max_height: 183,
    min_height: 173,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/SCHWARZTOR.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 186,
    max_height: 191,
    min_height: 181,
    max_weight: 95,
    min_weight: 82,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/SCHWARZTOR.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 194,
    max_height: 199,
    min_height: 189,
    max_weight: 999,
    min_weight: 95,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : 'https://ogso-mountain-essentials.com/app/ski-photos/SCHWARZTOR.png'


  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 171,
    max_height: 176,
    min_height: 166,
    max_weight: 74,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/CORBETS.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL" ,
    size: 179,
    max_height: 184,
    min_height: 174,
    max_weight: 86,
    min_weight: 74,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/CORBETS.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 187,
    max_height: 192,
    min_height: 182,
    max_weight: 100,
    min_weight: 87,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/CORBETS.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 195,
    max_height: 200,
    min_height: 190,
    max_weight: 999,
    min_weight: 100,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/CORBETS.png"


  },

  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 156,
    max_height: 161,
    min_height: 151,
    max_weight: 46,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/WHYMPER.png"


  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 164,
    max_height: 169,
    min_height: 159,
    max_weight: 58,
    min_weight: 46,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/WHYMPER.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 172,
    max_height: 177,
    min_height: 167,
    max_weight: 71,
    min_weight: 59,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/WHYMPER.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 180,
    max_height: 185,
    min_height: 175,
    max_weight: 85,
    min_weight: 72,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/WHYMPER.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 188,
    max_height: 193,
    min_height: 183,
    max_weight: 999,
    min_weight: 85,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/WHYMPER.png"

  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 160,
    max_height: 165,
    min_height: 155,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/GERVASUTTI.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 168,
    max_height: 173,
    min_height: 163,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/GERVASUTTI.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 176,
    max_height: 181,
    min_height: 171,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/GERVASUTTI.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 184,
    max_height: 189,
    min_height: 179,
    max_weight: 90,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/GERVASUTTI.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 192,
    max_height: 197,
    min_height: 187,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/GERVASUTTI.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 162,
    max_height: 167,
    min_height: 157,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DIABLE.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT SR ML',
    name: 'DIABLE 100',
    size: 170,
    max_height: 175,
    min_height: 165,
    max_weight: 68,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DIABLE.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT SR ML',
    name: 'DIABLE 100',
    size: 178,
    max_height: 183,
    min_height: 173,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DIABLE.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 186,
    max_height: 191,
    min_height: 181,
    max_weight: 95,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DIABLE.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 194,
    max_height: 199,
    min_height: 189,
    max_weight: 999,
    min_weight: 95,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DIABLE.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 171,
    max_height: 176,
    min_height: 166,
    max_weight: 74,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPENCER.jpg"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 179,
    max_height: 184,
    min_height: 174,
    max_weight: 86,
    min_weight: 74,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPENCER.jpg"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 187,
    max_height: 192,
    min_height: 182,
    max_weight: 100,
    min_weight: 87,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPENCER.jpg"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 195,
    max_height: 200,
    min_height: 190,
    max_weight: 999,
    min_weight: 100,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/SPENCER.jpg"


  }
  , 
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 155,
    max_height: 170,
    min_height: 160,
    max_weight: 46,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/BONATTI.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 164,
    max_height: 179,
    min_height: 169,
    max_weight: 58,
    min_weight: 46,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/BONATTI.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 172,
    max_height: 187,
    min_height: 187,
    max_weight: 71,
    min_weight: 59,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/BONATTI.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 180,
    max_height: 195,
    min_height: 185,
    max_weight: 999,
    min_weight: 71,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/BONATTI.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 156,
    max_height: 171,
    min_height: 161,
    max_weight: 46,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/JAEGER.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 164,
    max_height: 179,
    min_height: 169,
    max_weight: 71,
    min_weight: 59,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/JAEGER.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 172,
    max_height: 187,
    min_height: 177,
    max_weight: 71,
    min_weight: 59,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/JAEGER.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 180,
    max_height: 195,
    min_height: 185,
    max_weight: 85,
    min_weight: 72,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/JAEGER.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 188,
    max_height: 203,
    min_height: 193,
    max_weight: 999,
    min_weight: 85,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/JAEGER.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 160,
    max_height: 175,
    min_height: 165,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/THOR.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 168,
    max_height: 183,
    min_height: 173,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/THOR.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 176,
    max_height: 191,
    min_height: 181,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/THOR.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 184,
    max_height: 199,
    min_height: 189,
    max_weight: 90,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/THOR.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 192,
    max_height: 207,
    min_height: 197,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/THOR.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 162,
    max_height: 177,
    min_height: 167,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/COUTURIER.png"


  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 170,
    max_height: 185,
    min_height: 175,
    max_weight: 68,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/COUTURIER.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 178,
    max_height: 193,
    min_height: 183,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/COUTURIER.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 186,
    max_height: 201,
    min_height: 191,
    max_weight: 95,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/COUTURIER.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 194,
    max_height: 209,
    min_height: 199,
    max_weight: 999,
    min_weight: 95,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/COUTURIER.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 156,
    max_height: 171,
    min_height: 161,
    max_weight: 46,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/KRUMPE.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 164,
    max_height: 179,
    min_height: 169,
    max_weight: 58,
    min_weight: 46,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/KRUMPE.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 172,
    max_height: 187,
    min_height: 177,
    max_weight: 85,
    min_weight: 72,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/KRUMPE.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 180,
    max_height: 195,
    min_height: 185,
    max_weight: 85,
    min_weight: 72,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/KRUMPE.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 188,
    max_height: 203,
    min_height: 193,
    max_weight: 999,
    min_weight: 85,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/KRUMPE.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANA??DES 90 NEO ML',
    size: 160,
    max_height: 175,
    min_height: 165,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DANAIDES.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANA??DES 90 NEO ML',
    size: 168,
    max_height: 183,
    min_height: 173,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DANAIDES.png"

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANA??DES 90 NEO ML',
    size: 176,
    max_height: 191,
    min_height: 181,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DANAIDES.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANA??DES 90 NEO ML',
    size: 184,
    max_height: 199,
    min_height: 189,
    max_weight: 90,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DANAIDES.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANA??DES 90 NEO ML',
    size: 192,
    max_height: 207,
    min_height: 197,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/DANAIDES.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MARINELLI.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 170,
    max_height: 185,
    min_height: 175,
    max_weight: 68,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MARINELLI.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 178,
    max_height: 193,
    min_height: 183,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MARINELLI.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 186,
    max_height: 201,
    min_height: 191,
    max_weight: 95,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MARINELLI.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 194,
    max_height: 209,
    min_height: 199,
    max_weight: 999,
    min_weight: 95,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MARINELLI.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 171,
    max_height: 186,
    min_height: 176,
    max_weight: 74,
    min_weight: 0,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MALLORY.png"

  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 179,
    max_height: 194,
    min_height: 184,
    max_weight: 86,
    min_weight: 74,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MALLORY.png"


  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 187,
    max_height: 202,
    min_height: 192,
    max_weight: 100,
    min_weight: 87,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MALLORY.png"


  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 195,
    max_height: 210,
    min_height: 200,
    max_weight: 999,
    min_weight: 100,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "https://ogso-mountain-essentials.com/app/ski-photos/MALLORY.png"


  }

];