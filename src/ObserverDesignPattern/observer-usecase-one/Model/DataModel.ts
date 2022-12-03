import IDataModel from "./IDataModel";
import IDataController from "../Controller/IDataController";
import DataController from "../Controller/DataController";
import IDataView from "../View/IDataView";

export default class DataModel implements IDataModel
{
    #subscrib:{[id:number]:IDataView}={}
    #datacontroller:IDataController
    #counter:number
    constructor(){
        this.#counter=0
        this.#datacontroller=new DataController()
        this.#datacontroller.subscribe(this)
    }
    subscribe(subscriber: IDataView): number {
        this.#counter++
        this.#subscrib[this.#counter]=subscriber
        return this.#counter
    }
    unSubscribe(subscriberID: number): void {
        delete this.#subscrib[subscriberID]
    }
    notify(data: number[]): void {
        Object.keys(this.#subscrib).forEach(item=>{
            this.#subscrib[parseInt(item)].notify(data)
        })
    }
}