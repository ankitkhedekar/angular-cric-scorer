import { Component, Input } from '@angular/core';
import Scorer from './../common/scorer';

@Component({
  selector: 'scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent  {
  @Input() name: string;

  private scorer;
  private score;
  private ballTypes;
  private ballType: string;


  constructor (){
    this.scorer = new Scorer();
    this.score = this.scorer.getScore();
    this.ballTypes = this.scorer.getBallTypes();
    this._resetBallType();
  }

  scoreClick(runs) {
    this.scorer.scoreNext(runs, this.ballType);
    this._resetBallType();
  }

  scoreOut(runs) {
    this.scorer.scoreNext(0, this.ballType, true);
    this._resetBallType();
  }

  private _resetBallType () {
    this.ballType = 'normal';
  }

}
