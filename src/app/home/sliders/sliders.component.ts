import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 250,
    showSelectionBar: true};

  constructor() { }

  ngOnInit(): void {
  }

}
