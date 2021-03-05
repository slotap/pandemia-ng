import {Component, Input, OnInit} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import {OutputSimulationData} from "../model/output-simulation-data";


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  // @ts-ignore
  @Input() public outputData : OutputSimulationData;

  options: Options = {
    floor: 0,
    ceil: 100000,
    step: 1000,
    showSelectionBar: true,
    translate: (value: number): string => {
      return  value/1000 + 'k';
    }};

  constructor() { }

  ngOnInit(): void {
  }

}
