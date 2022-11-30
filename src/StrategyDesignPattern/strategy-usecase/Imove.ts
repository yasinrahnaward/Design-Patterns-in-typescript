export interface Imove{
    move(postion:[number,number]):void
}

export interface ImoveConstructor{
    new():Imove;
}