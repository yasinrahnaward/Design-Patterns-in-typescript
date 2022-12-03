import Observable from "./Observable";
import Observe from "./Observer";

const publisher=new Observable()
const subscrib_1=new Observe(publisher)
const subscrib_2=new Observe(publisher)
publisher.Notify('first notif : ',"Observer Design patter uploaded");
publisher.UnSubsrib(subscrib_2)
publisher.Notify('Second notif : ',"Iterator Design patter uploaded");
