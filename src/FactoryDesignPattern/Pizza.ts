abstract class  Pizza {
    public Prepare():void{
        console.log("its Prepared");
    }
    public abstract Bake():void;
    public Cut():void{
        console.log("Cutting Pizza");
    }
    public Box():void{
        console.log("Boxing Pizza");
    }
}
export default Pizza