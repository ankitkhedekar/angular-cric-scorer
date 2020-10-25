import { Component, Input, Output } from "@angular/core";
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
  ) {
    this.score = this._scorerService.getCurrentScore();
    this.overs = this._scorerService.getCurrentOvers();
    this._openActionSheet();
    this.thisOver = this._scorerService.getThisOver();
  }

  private _openActionSheet() {
    this._actionSheet.open(ScorerActionSheetComponent, {
      hasBackdrop: false,
      autoFocus: false
    });
  }
}
