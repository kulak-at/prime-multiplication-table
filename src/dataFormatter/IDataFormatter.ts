import { TableGeneratorResult } from '../tableGenerator/TableGenerator';
export interface IDataFormatter {
    format(table: TableGeneratorResult): string
}