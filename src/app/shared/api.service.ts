import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OutputSimulationData} from "../home/model/output-simulation-data";
import {SimulationInputModel} from "../home/model/simulation-input-model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  private  SIMULATION_URL = this.BASE_URL + "/simulations";

  constructor(private http : HttpClient) { }

  postSimulation(inputData : SimulationInputModel) : Observable<OutputSimulationData> {
    return this.http.post<OutputSimulationData>(this.SIMULATION_URL, inputData);
  }
}
