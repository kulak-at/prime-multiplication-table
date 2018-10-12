import { IPrimeGenerator } from "./IPrimeGenerator";
import { BruteForcePrimeGenerator } from './BruteForcePrimeGenerator';
import { SievePrimeGenerator } from './SievePrimeGenerator';

export class PrimeGeneratorFactory {
    public static getBestGenerator() : IPrimeGenerator {
        return new SievePrimeGenerator();
    }

    public static getGeneratorByName(name: string): IPrimeGenerator {
        switch (name) {
            case 'bruteforce':
                return new BruteForcePrimeGenerator();
            case 'sieve':
                return new SievePrimeGenerator();
            default:
                return new SievePrimeGenerator();
        }
    }
}