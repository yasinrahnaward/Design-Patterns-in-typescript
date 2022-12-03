import IDataModel from "../Model/IDataModel";
import IDataView from "./IDataView";
export default class TableDataView implements IDataView{
    #publisher:IDataModel
    #id:number
    constructor(publisher:IDataModel)
    {
        this.#publisher=publisher
        this.#id=this.#publisher.subscribe(this)
    }
    notify(data: number[]): void {
        console.log(`Table Data View, ${this.#id}`)
        this.draw(data)
    }
    draw(data: number[]): void {
        console.log(`Drawing a table  Data View :  ${JSON.stringify(data)}`)
    }
    delete(): void {
        this.#publisher.unSubscribe(this.#id)
    }
}