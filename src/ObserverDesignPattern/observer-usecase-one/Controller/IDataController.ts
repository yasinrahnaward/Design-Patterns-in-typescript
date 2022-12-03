import IDataModel from "../Model/IDataModel"

export default interface IDataController{
    subscribe(subscriber:IDataModel):void
    unSubscribe(subscriber:IDataModel):void
    notify(data:number[]):void
}