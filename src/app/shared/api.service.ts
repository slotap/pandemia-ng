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

  updateSimulation(id : number, inputData : SimulationInputModel) : Observable<OutputSimulationData> {
    return this.http.put<OutputSimulationData>(this.SIMULATION_URL + "/" + id, inputData);
  }

  convertToInputData(outputData : OutputSimulationData) : SimulationInputModel{
    let inputData : SimulationInputModel;
    return inputData = {
      daysToDie: outputData.daysToDie,
      daysToHeal: outputData.daysToHeal,
      daysToSimulate: outputData.daysToSimulate,
      infected: outputData.infected,
      mortalityIndex: outputData.mortalityIndex,
      population: outputData.population,
      reproductionNumber: outputData.reproductionNumber,
      title: outputData.title,
    }
  }
}
