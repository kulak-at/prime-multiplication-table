import { IDataFormatter } from './IDataFormatter';
import { TableGeneratorResult } from '../tableGenerator/TableGenerator';
const os = require('os');

export class TableFormatter implements IDataFormatter {
    format(table: TableGeneratorResult): string {
        const res = [
            ['', ...table.cols],
            ...(table.values.map((r,i) => [table.rows[i], ...r]))
        ];

        return res.map(row => row.join(' | ')).join(os.EOL);
    }
}