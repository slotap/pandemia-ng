import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modelSim: SimulationViewModel = {
    name:'',
    population:0,
    infected:0,
    rfactor:0,
    mortality:0,
    daysToHeal:0,
    daysToDie:0,
    daysToSimulate:0,
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendSimulation() {
    let url = "http://localhost:8082/api/simulate";
    this.http.post(url, this.modelSim).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("Ups, something went wrong while sending simulation data.")
        location.reload();
      }
    );
  }
}

export interface SimulationViewModel{
  name:string;
  population:number;
  infected:number;
  rfactor:number;
  mortality:number;
  daysToHeal:number;
  daysToDie:number;
  daysToSimulate:number;
}
