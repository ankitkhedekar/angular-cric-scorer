const BALLS_PER_OVER = 6;
const BALL_TYPES = [
  { name: "Normal", value: "normal" },
  { name: "Wide", value: "wide" },
  { name: "No", value: "no" },
];

export default class Scorer {

  constructor () {
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

  _handleBallType(ballType) {
    if (ballType === 'wide' || ballType === 'no') {
      this._addExtraRun();
    } else {
      this._incrementBallCount();
    }
  }

  _incrementBallCount() {
    this.score.balls++;
    if (this.score.balls === BALLS_PER_OVER) {
      this.score.overs++;
      this.score.balls = 0;
    }
  }

  _addExtraRun() {
    this.score.runs++;
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
}