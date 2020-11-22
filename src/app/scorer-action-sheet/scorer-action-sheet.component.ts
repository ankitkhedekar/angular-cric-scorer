import { Component, Inject, OnInit, Output } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material/bottom-sheet";

import { ScorerService } from "./../scorer/scorer.service";

@Component({
  selector: "app-scorer-action-sheet",
  templateUrl: "./scorer-action-sheet.component.html",
  styleUrls: ["./scorer-action-sheet.component.css"]
})
export class ScorerActionSheetComponent implements OnInit {
  private ballTypes;
  private ballType: string;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _scorerService: ScorerService
  ) {
    console.log("herererere", data);
    this.ballTypes = this._scorerService.getBallTypes();
    this._resetBallType();
  }

  ngOnInit() {}

  private _score(runs, ballType, isOut) {
    this._scorerService.scoreNext(runs, ballType, isOut);
    this.data.onScoreChangeHandler();
  }

  private _resetBallType() {
    this.ballType = "normal";
  }

  scoreClick(runs) {
    this._score(runs, this.ballType, false);
    this._resetBallType();
  }

  scoreOut(runs) {
    this._score(0, this.ballType, true);
    this._resetBallType();
  }
}
