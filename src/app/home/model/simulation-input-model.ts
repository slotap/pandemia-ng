export interface SimulationInputModel {
  title:string;
  population:number;
  infected:number;
  reproductionNumber:number;
  mortalityIndex:number;
  daysToHeal:number;
  daysToDie:number;
  daysToSimulate:number;
}
