import { Injectable } from "@angular/core";
import { ScorerService } from "../scorer/scorer.service";

import Match from "./../common/match";

@Injectable()
export class MatchService {
  private _match: any;

  constructor(private _scorerService: ScorerService) {
    this._match = new Match();
    // this._scorerService.scorer = this.match.team1Score;
  }

  get match() {
    return this._match;
  }

  getInnings() {
    if (this._match.currentInnings === 1) {
      return "1st Innings";
    }
    return "2nd Innings";
  }

  getMatchStatus() {
    return this._match.status;
  }

  matchTick() {
    this._match.matchTick();
  }
}
