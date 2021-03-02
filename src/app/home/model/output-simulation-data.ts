import {ProcessedData} from "./processed-data";

export interface OutputSimulationData {
  id : number;
  title : string;
  population : number;
  infected : number;
  rFactor : number;
  mortalityIndex : number;
  daysToHeal : number;
  daysToDie : number;
  daysToSimulate : number;
  outputData : Array<ProcessedData>;
}
