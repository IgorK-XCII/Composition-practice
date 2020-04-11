import { MatchResult } from './../MatchResult';
import { MatchData } from './../MatchData';
import { IAnalyzer } from './../Summary';

export class WinsAnalisys implements IAnalyzer {
  constructor(public teamName: string) {}

  run(matches: Array<MatchData>): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team "${this.teamName}" won ${wins} games`;
  }
}
