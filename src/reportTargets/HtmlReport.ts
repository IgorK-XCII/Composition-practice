import { IOutputTarget } from './../Summary';
import fs from 'fs';

export class HtmlReport implements IOutputTarget {
  constructor(private htmlFileName: string) {}

  print(report: string): void {
    const html = `
          <div>
              <h1>Analysis report</h1>
              <div>${report}</div>
          </div>
      `;
    fs.writeFileSync(`${this.htmlFileName}.html`, html);
  }
}
