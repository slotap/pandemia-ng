import {Component, Input, OnInit} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {OutputSimulationData} from "../model/output-simulation-data";
import {ApiService} from "../../shared/api.service";


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  // @ts-ignore
  @Input() public outputData : OutputSimulationData;

  optionsPopulation: Options = {
    floor: 0,
    ceil: 10000,
    step: 1,
    showSelectionBar: true,
/*    translate: (value: number): string => {
      return  value + 'k';
    }*/};

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  updateSimulation() {
    this.apiService.updateSimulation(this.outputData.id, this.apiService.convertToInputData(this.outputData) ).subscribe(
      res => {
        this.outputData = res;
      },
      err => {
        alert("Ups, something went wrong while sending simulation data.")
        location.reload();
      }
    );
  }
  saveSimulation() {
    this.apiService.saveSimulation(this.outputData.id, this.apiService.convertToInputData(this.outputData)).subscribe(
      res => {
        alert("Simulation saved")
      },
      err => {
        alert("Ups, something went wrong while sending simulation data.")
        location.reload();
      }
    );
  }
}
