import {series} from "./data.js";

export class Serie{
    constructor(public numero:number, public nombre:string, public productora:string, public temportadas:number, public descripcion:string,public linkpagina:string,public linkimagen:string){

    }
    public darPromedioTemporadas(seriess: Serie[]){
        let suma=0
        for(let i=0;i<seriess.length;i++){
            suma+=seriess[i].temportadas;
        }
        return (suma/seriess.length)
    }
}