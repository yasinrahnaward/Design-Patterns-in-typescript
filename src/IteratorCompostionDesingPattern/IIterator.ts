import IItem from './IItem'
export default interface IIterator{
    next():IItem;
    hasNext():boolean;
}