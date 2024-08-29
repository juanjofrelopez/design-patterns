import State from "../interface/State";
import NoQuarterState from "./states/NoQuarter";
import SoldState from "./states/SoldState";

export default class GumballMachine {
  private noQuarterState: State;
  private soldState: State;

  private state: State;
  private balls: number;

  constructor(b: number) {
    this.soldState = new SoldState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.state = this.soldState;
    this.balls = b;
  }

  // actions or 'buttons' this machine has
  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
  }

  // helpers
  public setState(s: State): void {
    this.state = s;
  }

  public releaseBall(): void {
    console.log("A gumball comes rolling out of the slot");
    if (this.balls > 0) this.balls--;
  }

  // getters
  public getNumOfBalls(): number {
    return this.balls;
  }

  // one for each state...
  public getNoQuarterState(): State {
    return this.noQuarterState;
  }
}
