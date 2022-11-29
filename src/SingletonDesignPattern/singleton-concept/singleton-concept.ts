// Singleton Concept Sample Code

class Singleton{
    static #instance:Singleton;
    private constructor()
    {

    };
    public static getInstance():Singleton
    {
        if(!Singleton.#instance)
        {
            return Singleton.#instance=new Singleton();
        }
        return this.#instance;
    }
    // logic
    public Print():void{
        console.log("Yasin Rahnaward");
    }
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = Singleton.getInstance() // setting its id property to 1
const OBJECT2 = Singleton.getInstance() // setting its id property to 2

console.log(OBJECT1 === OBJECT2) // = true