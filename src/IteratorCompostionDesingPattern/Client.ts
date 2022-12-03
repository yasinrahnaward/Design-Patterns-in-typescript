import Item from "./Item";
import Iterator from "./Iterator";
const list=[
    new Item('ALi',22,"076123211","MCS"),
    new Item('Ahmad',23,"07667211","MCS"),
    new Item('Zhara',21,"070823764","BCS"),
    new Item('Maryam',22,"076123411","MCS"),
    new Item('Reza',26,"076123411","MCS"),
    new Item('Farhan',23,"076123211","BCS"),
    new Item('Kabir',19,"07234123211","MCS"),
    new Item('Sema',20,"0702343211","MCS"),
    ]

const iterator=new Iterator(list);
while(iterator.hasNext())
{
    iterator.next().itemInfo();
}