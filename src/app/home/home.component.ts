import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {OutputSimulationData} from "./model/output-simulation-data";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modelSim: SimulationInputModel = {
    title:'',
    population:0,
    infected:0,
    reproductionNumber:0,
    mortalityIndex:0,
    daysToHeal:0,
    daysToDie:0,
    daysToSimulate:0,
  }

  outputSim : OutputSimulationData = {
    id : 0,
    title : '',
    population : 0,
    infected : 0,
    rFactor : 0,
    mortalityIndex : 0,
    daysToHeal : 0,
    daysToDie : 0,
    daysToSimulate : 0,
    outputData : []
  };

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  sendSimulation() {
    this.apiService.postSimulation(this.modelSim).subscribe(
      res => {
        alert("Form sent successfully")
        this.outputSim = res;
      },
      err => {
        alert("Ups, something went wrong while sending simulation data.")
        location.reload();
      }
    );
  }
}

export interface SimulationInputModel {
  title:string;
  population:number;
  infected:number;
  reproductionNumber:number;
  mortalityIndex:number;
  daysToHeal:number;
  daysToDie:number;
  daysToSimulate:number;
}
