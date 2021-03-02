import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public graphData = [
    {data: [10,65,88,90,102,111,114,116,168], label: "People Infected"},
    {data: [1,6,9,6,9,15,22,45,55,66,77,88,], label: "People Prone To Infection"},
    {data: [1,2,4,13,16,22,33,44,55,66,], label: "People Dead"},
    {data: [1,2,4,6,11,12,15,16,17,18], label: "People Cured"}
  ];

  public graphLabels = ['1','2','3','4','5','6','7','8','9'];

  public graphOptions = {
    scaleShowVerticalLines : false,
    responsive : true
  };

  public graphLegend = true;

  public lineChartType : ChartType = 'line';


  constructor() { }

  ngOnInit(): void {
  }

}

