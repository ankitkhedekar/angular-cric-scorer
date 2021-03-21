import Scorer from "./scorer";

export default class Match {
  constructor() {
    this.team1Score = new Scorer();
    this.team2Score = new Scorer();
    this.totalOvers = 1;
    this.currentInnings = 1;
    this._status = "NOT STARTED";
  }

  matchTick() {
    if (
      (this.team1Score.getCurrentOverCount() > 0 ||
        this.team1Score.getCurrentBallCount() > 0) &&
      this._status === "NOT STARTED"
    ) {
      this._status = "IN PROGRESS";
    }

    if (this.currentInnings === 1) {
      if (this.team1Score.getCurrentOverCount() === this.totalOvers) {
        console.log("innings changed");
        this.currentInnings = 2;
      }
    } else {
      if (this.team1Score.getCurrentOverCount() === this.totalOvers) {
        this._status = "COMPLETED";
      }
    }
  }

  get status() {
    return this._status;
  }
}
