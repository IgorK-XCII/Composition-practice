import { MatchData } from './MatchData';
import { WinsAnalisys } from './analyzers/WinsAnalisys';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface IAnalyzer {
  run(matches: Array<MatchData>): string;
}

export interface IOutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalisysWithHtmlReport(
    teamName: string,
    htmlFileName: string
  ): Summary {
    return new Summary(
      new WinsAnalisys(teamName),
      new HtmlReport(htmlFileName)
    );
  }
  constructor(
    private analyzer: IAnalyzer,
    private outputTarget: IOutputTarget
  ) {}

  buildAndPrintReport(matches: Array<MatchData>) {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}
