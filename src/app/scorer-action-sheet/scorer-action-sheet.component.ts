import { Component, OnInit } from '@angular/core';

import { ScorerService } from './../scorer/scorer.service';

@Component({
  selector: 'app-scorer-action-sheet',
  templateUrl: './scorer-action-sheet.component.html',
  styleUrls: ['./scorer-action-sheet.component.css']
})
export class ScorerActionSheetComponent implements OnInit {


  private ballTypes;
  private ballType: string;

  constructor(private _scorerService: ScorerService) { 
    this.ballTypes = this._scorerService.getBallTypes();
    this._resetBallType();
  }

  ngOnInit() {
  }

  private _resetBallType () {
    this.ballType = 'normal';
  }

  scoreClick(runs) {
    this._scorerService.scoreNext(runs, this.ballType);
    this._resetBallType();
  }

  scoreOut(runs) {
    this._scorerService.scoreNext(0, this.ballType, true);
    this._resetBallType();
  }

}