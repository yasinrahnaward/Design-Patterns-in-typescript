import IItem from "./IItem";
import IIterator from "./IIterator";
export default class Iterator implements IIterator{
    index:number;
    item:IItem[];
    constructor(item:IItem[])
    {
        this.index=0
        this.item=item;
    }
    next(): IItem {
        if(this.index<this.item.length)
        {
            const item=this.item[this.index]
            this.index+=1
            return item
        }
        throw new Error("Method not implemented.");
    }
    hasNext(): boolean {
        return this.index<this.item.length
    }
    
}