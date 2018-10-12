import { IDataFormatter } from "./IDataFormatter";
import { TableFormatter } from './tableFormatter';
import { CSVFormatter } from './csvFormatter';

export class DataFormatterFactory {
    public static getDefaultFormatter() : IDataFormatter {
        return new TableFormatter();
    }

    public static getFormatterByName(name: string): IDataFormatter {
        switch (name) {
            case 'csv':
                return new CSVFormatter;
            case 'table':
                return new TableFormatter();
            default:
                return this.getDefaultFormatter();
        }
    }
}