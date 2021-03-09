import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes} from "@angular/router";
import { SavedSimulationsComponent } from './saved-simulations/saved-simulations.component';
import { FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SlidersComponent } from './home/sliders/sliders.component';
import { GraphComponent } from './home/graph/graph.component';
import { ChartsModule} from "ng2-charts";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {ApiService} from "./shared/api.service";

const appRoutes : Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'feedback',
    component : FeedbackComponent
  },
  {
    path : 'savedsim',
    component : SavedSimulationsComponent
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    component : NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    HomeComponent,
    NotFoundComponent,
    SavedSimulationsComponent,
    SlidersComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgxSliderModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
