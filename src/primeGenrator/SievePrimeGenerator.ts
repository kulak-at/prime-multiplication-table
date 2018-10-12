import { IPrimeGenerator } from './IPrimeGenerator';
export class SievePrimeGenerator implements IPrimeGenerator {

    async getFirstN(n: number): Promise<number[]> {
        let primes: number[] = [];
        function isPrime(x: number): boolean {
            let sqrtX = Math.sqrt(x);
            for(let p of primes) {
                if (p > sqrtX) {
                    break;
                }
                if (x % p === 0) {
                    return false;
                }
            }
            return true;
        }
        let nextN = 2;
        while(primes.length < n) {
            if (isPrime(nextN)) {
                primes.push(nextN);
            }

            nextN++;
        }
        return primes;
    }
}