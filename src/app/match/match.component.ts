import { Component } from "@angular/core";
import { MatchService } from "./match.service";

@Component({
  selector: "cric-match",
  templateUrl: "./match.component.html",
  styleUrls: []
})
export class MatchComponent {
  match: any;
  currentInnings: any;
  matchStatus: any;

  constructor(private _matchService: MatchService) {}

  ngOnInit() {
    this.match = this._matchService.match;
    this.currentInnings = this._matchService.getInnings();
    this.matchStatus = this._matchService.getMatchStatus();
  }

  scoreTickHandler() {
    console.log("@@@@@@@@@@");
    this._matchService.matchTick();
    this.currentInnings = this._matchService.getInnings();
    this.matchStatus = this._matchService.getMatchStatus();
  }
}
