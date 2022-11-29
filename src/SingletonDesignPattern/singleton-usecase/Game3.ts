import IGame from './IGame'
import Leaderboard from './Leaderboard';
class Game3 implements IGame{
    leaderboard=Leaderboard.getinstance();

    addwinner(position: number, name: string): void {
        this.leaderboard.addWinner(position,name);
    }
}
export default Game3
