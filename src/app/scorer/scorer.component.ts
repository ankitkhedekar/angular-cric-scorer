import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ScorerService } from './scorer.service';
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


  constructor (private _actionSheet: MatBottomSheet,
    private _scorerService: ScorerService
  ){
    this.score = this._scorerService.getCurrentScore();
    this.ballTypes = this._scorerService.getBallTypes();
    this._resetBallType();
    this._openActionSheet();
  }

  scoreClick(runs) {
    this._scorerService.scoreNext(runs, this.ballType);
    this._resetBallType();
  }

  scoreOut(runs) {
    this._scorerService.scoreNext(0, this.ballType, true);
    this._resetBallType();
  }

  private _resetBallType () {
    console.log('erere');
    this.ballType = 'normal';
  }

  private _openActionSheet () {
    this._actionSheet.open(ScorerActionSheetComponent , {
      hasBackdrop: false,
      autoFocus: false
    });
  }

}
