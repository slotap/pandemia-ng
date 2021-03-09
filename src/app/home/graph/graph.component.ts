import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ChartType } from 'chart.js'
import {OutputSimulationData} from "../model/output-simulation-data";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit,OnChanges {
  // @ts-ignore
  @Input() public outputData: OutputSimulationData;

  public graphData = [
    {data: [0], label: "People Infected"},
    {data: [0], label: "People Prone To Infection"},
    {data: [0], label: "People Dead"},
    {data: [0], label: "People Cured"}
  ];

  public graphLabels = ['0'];

  public graphOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public graphLegend = true;

  public lineChartType: ChartType = 'line';

  constructor() {
  }

  ngOnInit(): void {
  }

  refreshGraphData() {
    this.graphData[0].data = this.prepareInfectedData(this.outputData);
    this.graphData[1].data = this.prepareNotYetInfectedData(this.outputData);
    this.graphData[2].data = this.prepareDeadData(this.outputData);
    this.graphData[3].data = this.prepareCuredData(this.outputData);
    this.graphLabels = this.prepareGraphLabels(this.outputData);
  }

  prepareInfectedData(outputData: OutputSimulationData): number[] {
    return outputData.outputData.map(infected => {
      return infected.infectedTotal
    })
  }

  prepareNotYetInfectedData(outputData: OutputSimulationData): number[] {
    return outputData.outputData.map(notInfected => {
      return notInfected.notInfectedDaily
    })
  }

  prepareDeadData(outputData: OutputSimulationData): number[] {
    return outputData.outputData.map(dead => {
      return dead.diedDaily
    })
  }

  prepareCuredData(outputData: OutputSimulationData): number[] {
    return outputData.outputData.map(cured => {
      return cured.healedDaily
    })
  }

  prepareGraphLabels(outputData: OutputSimulationData): string[] {
    return outputData.outputData.map((data,index) => {
      return index.toString();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
     this.refreshGraphData();
  }
}


