import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.withCsv('original');
const summary = Summary.winsAnalisysWithHtmlReport('Man United', 'report');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
