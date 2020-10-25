import { describe } from "riteway";

import Scorer from "./scorer";

describe("Testing scorer intialisation", async assert => {
  const testScorer = new Scorer();

  assert({
    given: "no arguments",
    should: "return initial score",
    actual: testScorer.score,
    expected: {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0
    }
  });
});

describe("Testing score reset", async assert => {
  const testScorer = new Scorer();

  testScorer._resetScore();

  assert({
    given: "no arguments",
    should: "return initial score",
    actual: testScorer.score,
    expected: {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0
    }
  });
});
