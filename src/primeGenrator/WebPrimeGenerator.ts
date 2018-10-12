import { IPrimeGenerator } from "./IPrimeGenerator";
import fetch from 'node-fetch';

const PRIME_NUMBERS_URL = 'http://www.primos.mat.br/primeiros_10000_primos.txt';
function convertToNumbers(text: string): number[] {
    return text
        .split('\n')
        .map(x => x.split('\t'))
        .reduce((a, x) => [...a,...x], [])
        .map(x => parseInt(x, 10))
}


export class WebPrimeGenerator implements IPrimeGenerator {
    list: number[]
    async getFirstN(n: number): Promise<number[]> {
        if (n > 10000) {
            throw new Error('Web method does not work for n>10000');
        }
        const list = await this.loadNumbers();
        return list.slice(0, n);
    }

    private async loadNumbers(): Promise<number[]> {
        if (this.list) {
            return this.list;
        }
        const resp = await fetch(PRIME_NUMBERS_URL)
        const r = await resp.text();
        this.list = convertToNumbers(r);
        return this.list;
    }
}