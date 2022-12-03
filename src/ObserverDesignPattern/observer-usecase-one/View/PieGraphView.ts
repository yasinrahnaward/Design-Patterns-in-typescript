import IDataModel from "../Model/IDataModel";
import IDataView from "./IDataView";
export default class PieGhraphDataView implements IDataView{
    #publisher:IDataModel
    #id:number
    constructor(publisher:IDataModel)
    {
        this.#publisher=publisher
        this.#id=this.#publisher.subscribe(this)
    }
    notify(data: number[]): void {
        console.log(`Pie chart data View, ${this.#id}`)
        this.draw(data)
    }
    draw(data: number[]): void {
        console.log(`Drawing a Pie chart Data View :  ${JSON.stringify(data)}`)
    }
    delete(): void {
        this.#publisher.unSubscribe(this.#id)
    }
}