export interface IPrimeGenerator {
    getFirstN(n: number): Promise<number[]>
}