import IDataModel from "../Model/IDataModel";
import IDataController from "./IDataController";
export default class DataController implements IDataController{
    static instance:DataController
    #subsriber:Set<IDataModel>=new Set();
    constructor()
    {
        if(DataController.instance)
        {
            return DataController.instance
        }
        DataController.instance=this
    }

    subscribe(subscriber: IDataModel):void{
        this.#subsriber.add(subscriber)
    }
    unSubscribe(subscriber: IDataModel){
        this.#subsriber.delete(subscriber)
    }
    notify(data: number[]){
        this.#subsriber.forEach(item=>{
            item.notify(data)
        })
    }
    
}