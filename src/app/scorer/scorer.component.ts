import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import Scorer from './../common/scorer';
import { ScorerActionSheetComponent } from './../scorer-action-sheet/scorer-action-sheet.component';

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


  constructor (private _actionSheet: MatBottomSheet){
    this.scorer = new Scorer();
    this.score = this.scorer.getScore();
    this.ballTypes = this.scorer.getBallTypes();
    this._resetBallType();
    this._openActionSheet();
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

  private _openActionSheet () {
    this._actionSheet.open(ScorerActionSheetComponent , {
      hasBackdrop: false
    });
  }

}
