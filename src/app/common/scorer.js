const BALLS_PER_OVER = 6;
const BALL_TYPES = [
  { name: "Normal", value: "normal" },
  { name: "Wide", value: "wide" },
  { name: "No", value: "no" }
];

export default class Scorer {
  constructor() {
    this._thisOver = [];
    this._resetScore();
  }

  _resetScore() {
    this._score = {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0
    };
    this._resetThisOver();
  }

  _resetThisOver() {
    this._thisOver.length = 0;
  }

  _handleBallType(ballType) {
    if (ballType === "wide" || ballType === "no") {
      this._addExtraRun();
    } else {
      this._incrementBallCount();
    }
  }

  _incrementBallCount() {
    this._score.balls++;
    if (this._score.balls === BALLS_PER_OVER) {
      this._score.overs++;
      this._score.balls = 0;
      this._resetThisOver();
    }
  }

  _addExtraRun() {
    this._score.runs++;
  }

  _addToThisOver(runs, ballType, isOut) {
    this._thisOver.push({
      runs,
      ballType,
      isOut
    });
    console.log("this over:", this.thisOver);
  }

  get score() {
    // return this._score;
    return `${this._score.runs}/${this._score.wickets}`;
  }

  get overs() {
    return `${this._score.overs}.${this._score.balls}`;
  }

  get ballTypes() {
    return BALL_TYPES;
  }

  get thisOver() {
    return this._thisOver;
  }

  scoreNext(runs, ballType, isOut) {
    this._addToThisOver(runs, ballType, isOut);
    this._handleBallType(ballType);
    this._score.runs += runs;

    if (isOut) {
      this._score.wickets++;
    }
  }
}
