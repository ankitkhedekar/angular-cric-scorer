import { Injectable } from "@angular/core";

import Scorer from "./../common/scorer";

@Injectable()
export class ScorerService {
  private scorer;

  constructor() {
    this.scorer = new Scorer();
  }

  getCurrentScore() {
    return this.scorer.score;
  }

  getCurrentOvers() {
    return this.scorer.overs;
  }

  getBallTypes() {
    return this.scorer.ballTypes;
  }

  scoreNext(runs, ballType, isOut = false) {
    this.scorer.scoreNext(runs, ballType, isOut);
  }

  getThisOver() {
    return this.scorer.thisOver;
  }
}
