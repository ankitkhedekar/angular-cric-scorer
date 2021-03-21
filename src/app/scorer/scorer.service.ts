import { Injectable } from "@angular/core";

import Scorer from "./../common/scorer";

@Injectable()
export class ScorerService {
  private _scorer: any;
  constructor() {}

  set scorer(scorerObj) {
    this._scorer = scorerObj;
  }

  getCurrentScore() {
    return this._scorer.score;
  }

  getCurrentOvers() {
    return this._scorer.overs;
  }

  getBallTypes() {
    return this._scorer.ballTypes;
  }

  scoreNext(runs, ballType, isOut = false) {
    this._scorer.scoreNext(runs, ballType, isOut);
  }

  getThisOver() {
    return this._scorer.thisOver;
  }
}
