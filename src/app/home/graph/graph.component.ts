import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public graphData = [
    {data: [10,65,88,90,102,111,114,116,168], label: "pandemia1"},
    {data: [1,2,4,6,9,15,22,45,67], label: "pandemia 2"}
  ];

  public graphLabels = ['1','2','3','4','5','6','7','8','9'];

  public graphOptions = {
    scaleShowVerticalLines : false,
    responsive : true
  };

  public graphLegend = true;

  public lineChartType = 'line';


  constructor() { }

  ngOnInit(): void {
  }

}

