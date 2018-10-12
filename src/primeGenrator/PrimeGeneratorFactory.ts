import { IPrimeGenerator } from "./IPrimeGenerator";
import { BruteForcePrimeGenerator } from './BruteForcePrimeGenerator';

export class PrimeGeneratorFactory {
    public static getBestGenerator() : IPrimeGenerator {
        return new BruteForcePrimeGenerator();
    }
}