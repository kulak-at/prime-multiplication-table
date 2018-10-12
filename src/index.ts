import { PrimeGeneratorFactory } from './primeGenrator/PrimeGeneratorFactory';
import { TableGenerator } from './tableGenerator/TableGenerator';
import { TableFormatter } from './dataFormatter/tableFormatter';

async function generatePrimeTable(n: number): Promise<string> {
    const primeGen = PrimeGeneratorFactory.getBestGenerator();
    const tableGen = new TableGenerator();
    const formatter = new TableFormatter();

    const primes = await primeGen.getFirstN(n);
    const table = tableGen.generate(primes, (a, b) => a * b);
    return formatter.format(table);
};

const n = parseInt(process.argv[2], 10);

generatePrimeTable(n).then(t => console.log(t));