import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { ScorerService } from "./../scorer/scorer.service";

@Component({
  selector: "app-scorer-action-sheet",
  templateUrl: "./scorer-action-sheet.component.html",
  styleUrls: ["./scorer-action-sheet.component.css"]
})
export class ScorerActionSheetComponent implements OnInit {
  @Output() onScoreChange: EventEmitter<any> = new EventEmitter();

  private ballTypes;
  private ballType: string;

  constructor(private _scorerService: ScorerService) {
    this.ballTypes = this._scorerService.getBallTypes();
    this._resetBallType();
  }

  ngOnInit() {}

  private _score(runs, ballType, isOut) {
    this._scorerService.scoreNext(runs, ballType, isOut);
    this.onScoreChange.emit();
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
