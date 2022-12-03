import IObserver from "./IObserver(Subscriber)";
import IObservable from "./IObservable(Publisher)";
export default class Observe implements IObserver{
    constructor(observable:IObservable)
    {
        observable.Subscrib(this)
    }
    notify(...args: any[]): void {
        console.log(`subscriber : receive ${JSON.stringify(args)}`);
    }
}