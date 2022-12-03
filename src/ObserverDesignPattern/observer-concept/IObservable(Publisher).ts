import IObserver from "./IObserver(Subscriber)"
export default interface IObservable{
    Subscrib(subscribe:IObserver):void
    UnSubsrib(unsubscribe:IObserver):void
    Notify(...args:any[]):void
}