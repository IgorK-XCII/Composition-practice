import fs from 'fs';

export class CsvFileReader {
  data: Array<Array<string>> = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(`${this.fileName}.csv`, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map(
        (row: string): Array<string> => {
          return row.split(',');
        }
      );
  }
}
