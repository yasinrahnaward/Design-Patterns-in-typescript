class Leaderboard {
  // static interal instance refrence
  static #instance: Leaderboard;
  #table: { [id: number]: string } = {};
  //private constructor

  private constructor() {}
  // stattic getinstance method
  public static getinstance(): Leaderboard {
    if (!Leaderboard.#instance) {
      return (Leaderboard.#instance = new Leaderboard());
    }
    return Leaderboard.#instance;
  }

  // add winner
  public addWinner(position: number, name: string): void {
    this.#table[position]=name;
  }
  //print winner
  public print():void{
    console.log("******************** LeaderBoard*******************");
    for(const item in this.#table)
    {
        console.log(`|\t${item}\t|\t${this.#table[item]}\t|`)
    }
    console.log();
  }
}
export default Leaderboard;