import { describe } from riteaway;

import Scorer from './scorer';

describe('Testing scorer intialisation', async assert => {
  const should = 'return the inital score';

  const testScorer = new Scorer();

  assert({
    given: 'no arguments',
    should: 'return initial score',
    actual: testScorer.getScore(),
    expected: {
      runs: 0,
      wickets: 0,
      overs: 0,
      balls: 0
    }
  });
});
