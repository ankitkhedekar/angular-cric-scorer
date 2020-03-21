const BALLS_PER_OVER = 6;
const BALL_TYPES = [
  { name: "Normal", value: "normal" },
  { name: "Wide", value: "wide" },
  { name: "No", value: "no" },
];

export default class Scorer {
  private score;

  constructor () {
    console.log('constructor called');
    this._resetScore();
  }

  _resetScore() {
    this.score = {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0
    }
  }

  getScore() {
    return this.score;
  }

  getBallTypes() {
    return BALL_TYPES;
  }

  scoreNext(runs, ballType, isOut) {
    this._handleBallType(ballType);
    this.score.runs+=runs;

    if (isOut) {
      this.score.wickets++;
    }

  }

  private _handleBallType(ballType) {
    if (ballType === 'wide' || ballType === 'no') {
      this._addExtraRun();
    } else {
      this._incrementBallCount();
    }
  }

  private _incrementBallCount() {
    this.score.balls++;
    if (this.score.balls === BALLS_PER_OVER) {
      this.score.overs++;
      this.score.balls = 0;
    }
  }

  private _addExtraRun() {
    this.score.runs++;
  }

}