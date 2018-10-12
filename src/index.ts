import { PrimeGeneratorFactory } from './primeGenrator/PrimeGeneratorFactory';
import { TableGenerator } from './tableGenerator/TableGenerator';
import { IPrimeGenerator } from './primeGenrator/IPrimeGenerator';
import { IDataFormatter } from './dataFormatter/IDataFormatter';
import { DataFormatterFactory } from './dataFormatter/dataFormatterFactory';

async function generatePrimeTable(n: number, primeGen: IPrimeGenerator, formatter: IDataFormatter): Promise<string> {
    const tableGen = new TableGenerator();

    const primes = await primeGen.getFirstN(n);
    const table = tableGen.generate(primes, (a, b) => a * b);
    return formatter.format(table);
};

const arg = process.argv;

if (arg.length < 3) {
    console.error(`Usage: node ${arg[1]} N [METHOD [FORMATTER]]
    
    Command generates multiplication table of N prime numbers.

    N           number                 number of prime numbers to be generated
    METHOD      sieve|bruteforce|web   algorithm used to generate prime numbers (default: sieve)
    FORMATTER   tab|csv                formatter to be used (default: tab)`);
    process.exit(1);
}

const n = parseInt(process.argv[2], 10);

let generator: IPrimeGenerator;
if (arg.length >= 4) {
    const method = arg[3];
    generator = PrimeGeneratorFactory.getGeneratorByName(method);
} else {
    generator = PrimeGeneratorFactory.getBestGenerator();
}

let formatter: IDataFormatter;
if (arg.length >= 5) {
    const f = arg[4];
    formatter = DataFormatterFactory.getFormatterByName(f);
} else {
    formatter = DataFormatterFactory.getDefaultFormatter();
}

generatePrimeTable(n, generator, formatter)
    .then(t => console.log(t))
    .catch(e => {
        console.error('Error occured: ' + e.message);
        process.exit(1);
    });