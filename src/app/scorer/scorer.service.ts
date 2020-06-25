import { Injectable } from '@angular/core';

import Scorer from './../common/scorer';

@Injectable()
export class ScorerService {
  private scorer;

  constructor() { 
    this.scorer = new Scorer();
  }

  getCurrentScore() {
    return this.scorer.getScore();
  }

  getBallTypes() {
    return this.scorer.getBallTypes();
  }

  scoreNext(runs, ballType, isOut = false) {
    this.scorer.scoreNext(runs, ballType, isOut);
  }

}