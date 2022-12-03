import IDataView from "../View/IDataView"
export default interface IDataModel{
    subscribe(subscriber:IDataView):number
    unSubscribe(subscriberID:number):void
    notify(data:number[]):void
}