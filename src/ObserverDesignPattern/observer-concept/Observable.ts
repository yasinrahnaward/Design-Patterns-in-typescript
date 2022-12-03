import IObserver from "./IObserver(Subscriber)";
import IObservable from "./IObservable(Publisher)";
export default class Observable implements IObservable{
    #subscriberList:Set<IObserver>
    constructor(){
        this.#subscriberList=new Set()
    }
    Subscrib(subscribe:IObserver){
            this.#subscriberList.add(subscribe)
    }
    UnSubsrib(unsubscribe:IObserver): void {
        this.#subscriberList.delete(unsubscribe)
    }
    Notify(...args: any[]): void {
        this.#subscriberList.forEach(subscriber=>{
            subscriber.notify(...args)
        })
    }

    
}