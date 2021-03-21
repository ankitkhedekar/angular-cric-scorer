import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ScorerService } from "./scorer.service";
import { ScorerActionSheetComponent } from "./../scorer-action-sheet/scorer-action-sheet.component";

@Component({
  selector: "scorer",
  templateUrl: "./scorer.component.html",
  styleUrls: ["./scorer.component.css"]
})
export class ScorerComponent {
  @Input() name: string;
  @Input() matchStatus;
  @Input() scorerObj;
  @Output() scoreTick = new EventEmitter();

  private scorer;
  private score;
  private overs;
  private ballTypes;
  private ballType: string;
  private thisOver;
  private test = [1, 2, 3];

  constructor(
    private _actionSheet: MatBottomSheet,
    private _scorerService: ScorerService
  ) {}

  ngOnInit() {
    this._scorerService.scorer = this.scorerObj;
    this._getScoreForScoreCard();
    this._openActionSheet();
  }

  private _getScoreForScoreCard() {
    this.score = this._scorerService.getCurrentScore();
    this.overs = this._scorerService.getCurrentOvers();
    this.thisOver = this._scorerService.getThisOver();
    console.log("_getScoreForScoreCard");
    this.scoreTick.emit("dummy");

    if (this.matchStatus === "COMPLETED") {
      this._actionSheet.dismiss();
    }
  }

  private _openActionSheet() {
    const scoreComponentRef = this;
    const scorerActionSheet = this._actionSheet.open(
      ScorerActionSheetComponent,
      {
        data: {
          onScoreChangeHandler: function() {
            scoreComponentRef._getScoreForScoreCard();
          }
        },
        hasBackdrop: false,
        autoFocus: false
      }
    );
  }
}
