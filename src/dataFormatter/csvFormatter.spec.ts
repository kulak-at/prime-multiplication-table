import { TableGenerator } from '../tableGenerator/TableGenerator';
import { CSVFormatter } from './csvFormatter';
const expect: Chai.ExpectStatic = require('chai').expect;

describe('CSV Formatter', () => {
    it('should format simple table', async () => {
        const gen = new TableGenerator();
        const t = gen.generate([1], (a, b) => a + b);
        const formatter = new CSVFormatter();
        const str = formatter.format(t);
        expect(str).to.eql(`,1
1,2`);
    });
});