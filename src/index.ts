import { PrimeGeneratorFactory } from './primeGenrator/PrimeGeneratorFactory';
import { TableGenerator } from './tableGenerator/TableGenerator';
import { TableFormatter } from './dataFormatter/tableFormatter';
import { IPrimeGenerator } from './primeGenrator/IPrimeGenerator';

async function generatePrimeTable(n: number, primeGen: IPrimeGenerator): Promise<string> {
    const tableGen = new TableGenerator();
    const formatter = new TableFormatter();

    const primes = await primeGen.getFirstN(n);
    const table = tableGen.generate(primes, (a, b) => a * b);
    return formatter.format(table);
};

const arg = process.argv;

if (arg.length < 3) {
    console.error(`Usage: node ${arg[1]} N [METHOD]
    
    Command generates multiplication table of N prime numbers.

    N       number             number of prime numbers to be generated
    METHOD  sieve|bruteforce   algorithm used to generate prime numbers(default: sieve)`);
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

generatePrimeTable(n, generator).then(t => console.log(t));