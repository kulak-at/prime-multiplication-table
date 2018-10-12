import { IDataFormatter } from './IDataFormatter';
import { TableGeneratorResult } from '../tableGenerator/TableGenerator';
const os = require('os');

function padTable(tab: any[][]): string[][] {
    // assuming all the rows have the same length
    // TODO: this function mutates table, should probably create a copy instead
    for(let i=0;i<tab[0].length;i++) {
        let maxLen = 0;
        for(let j=0;j<tab.length;j++) {
            tab[j][i] = tab[j][i].toString();
            maxLen = Math.max(maxLen, tab[j][i].length);
        }
        for(let j=0;j<tab.length;j++) {
            tab[j][i] = tab[j][i].padStart(maxLen, ' ');
        }
    }
    return tab;
}

export class TableFormatter implements IDataFormatter {
    format(table: TableGeneratorResult): string {
        const res = [
            ['', ...table.cols],
            ...(table.values.map((r,i) => [table.rows[i], ...r]))
        ];

        return padTable(res).map(row => '| ' + row.join(' | ') + ' |').join(os.EOL);
    }
}