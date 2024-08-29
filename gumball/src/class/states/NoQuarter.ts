import State from "../../interface/State";
import GumballMachine from "../GumballMachine";

export default class NoQuarterState implements State {
  private machine: GumballMachine;
  constructor(m: GumballMachine) {
    this.machine = m;
  }
  insertQuarter() {}
  ejectQuarter() {}
  turnCrank() {}
  dispense() {}
}
