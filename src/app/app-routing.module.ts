import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent} from './content/content.component'
import {Content2Component} from  './content2/content2.component'
import { SkiResultComponent } from './ski-result/ski-result.component';
import { SkiLevelComponent } from './ski-level/ski-level.component';
import { TerrainTypeComponent } from './terrain-type/terrain-type.component';
import { SkiStyleComponent } from './ski-style/ski-style.component';
import { RidingSpeedComponent } from './riding-speed/riding-speed.component';
import { ChooseYouGearComponent } from './choose-you-gear/choose-you-gear.component';
import { SplitboardSizeComponent } from './splitboard-size/splitboard-size.component';
import { SplitboardHeightComponent } from './splitboard-height/splitboard-height.component';
import { SplitboardSkiingLevelComponent } from './splitboard-skiing-level/splitboard-skiing-level.component';
import { SplitboardYourTerrainTypeComponent } from './splitboard-your-terrain-type/splitboard-your-terrain-type.component';
import { SplitboardSkiingStyleComponent } from './splitboard-skiing-style/splitboard-skiing-style.component';
import { SplitboardSpeedComponent } from './splitboard-speed/splitboard-speed.component';
import { SplitboardTurnComponent } from './splitboard-turn/splitboard-turn.component';
import { SplitboardResultComponent } from './splitboard-result/splitboard-result.component';
const routes: Routes = [
{ path: 'step1',   component:ContentComponent    },
{ path: 'step2',    component:Content2Component  },
{ path: 'splitboard-your-height',    component:SplitboardSizeComponent  },
{ path: 'splitboard-your-weight',    component:SplitboardHeightComponent  },
{ path: 'splitboard-skiing-level',    component:SplitboardSkiingLevelComponent  },
{path : 'splitboard-your-terrain-type', component:SplitboardYourTerrainTypeComponent},
{path : 'splitboard-skiing-style', component:SplitboardSkiingStyleComponent},
{path : 'splitboard-speed', component:SplitboardSpeedComponent},
{path : 'splitboard-turns', component:SplitboardTurnComponent}, 
{ path: 'terrain',   component:TerrainTypeComponent  },
{ path: 'riding',   component:RidingSpeedComponent   },
{ path: 'style',   component:SkiStyleComponent   },
 { path: 'SkiLevel', component:SkiLevelComponent  },
 { path: 'result',   component:SkiResultComponent },
 { path: '',         component:ChooseYouGearComponent },
 {path : 'result-splitboard', component:SplitboardResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }