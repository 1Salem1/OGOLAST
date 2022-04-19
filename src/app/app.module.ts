import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { Content2Component } from './content2/content2.component';
import { SkiResultComponent } from './ski-result/ski-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkiLevelComponent } from './ski-level/ski-level.component';
import { TerrainTypeComponent } from './terrain-type/terrain-type.component';
import { SkiStyleComponent } from './ski-style/ski-style.component';
import { RidingSpeedComponent } from './riding-speed/riding-speed.component';
import { environment } from 'src/environments/environment';
import { ChooseYouGearComponent } from './choose-you-gear/choose-you-gear.component';
import { SplitboardSizeComponent } from './splitboard-size/splitboard-size.component';
import { SplitboardHeightComponent } from './splitboard-height/splitboard-height.component';
import { SplitboardSkiingLevelComponent } from './splitboard-skiing-level/splitboard-skiing-level.component';
import { SplitboardYourTerrainTypeComponent } from './splitboard-your-terrain-type/splitboard-your-terrain-type.component';
import { SplitboardSkiingStyleComponent } from './splitboard-skiing-style/splitboard-skiing-style.component';
import { SplitboardSpeedComponent } from './splitboard-speed/splitboard-speed.component';
import { SplitboardTurnComponent } from './splitboard-turn/splitboard-turn.component';
import { SplitboardResultComponent } from './splitboard-result/splitboard-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    Content2Component,
     SkiResultComponent,
     SkiLevelComponent,
     TerrainTypeComponent,
     SkiStyleComponent,
     RidingSpeedComponent,
     ChooseYouGearComponent,
     SplitboardSizeComponent,
     SplitboardHeightComponent,
     SplitboardSkiingLevelComponent,
     SplitboardYourTerrainTypeComponent,
     SplitboardSkiingStyleComponent,
     SplitboardSpeedComponent,
     SplitboardTurnComponent,
     SplitboardResultComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
