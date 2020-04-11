import { MatchData } from './MatchData';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

interface IDataReader {
  read(): void;
  data: Array<Array<string>>;
}

export class MatchReader {
  static withCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  matches: Array<MatchData> = [];

  constructor(public reader: IDataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: Array<string>): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          Number(row[3]),
          Number(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
