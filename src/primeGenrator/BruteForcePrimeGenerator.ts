import { IPrimeGenerator } from "./IPrimeGenerator";

export class BruteForcePrimeGenerator implements IPrimeGenerator {
    async getFirstN(n: number): Promise<number[]> {
        const primes = [];
        let nextCheck = 2;
        while(primes.length < n) {
            if (this.isPrime(nextCheck)) {
                primes.push(nextCheck);
            }
            nextCheck++;
        }
        return primes;
    }

    private isPrime(n: number): boolean {
        for(let i=2;i<n;i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}