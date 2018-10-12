import { IDataFormatter } from './IDataFormatter';
import { TableGeneratorResult } from '../tableGenerator/TableGenerator';
const os = require('os');

export class CSVFormatter implements IDataFormatter {
    format(table: TableGeneratorResult): string {
        let res = [
            ['', ...table.cols],
            ...(table.values.map((r,i) => [table.rows[i], ...r]))
        ];

        return res.map(row => row.join(',')).join(os.EOL);
    }
}