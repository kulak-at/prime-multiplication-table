type TableGeneratorCallback = (a: number, b: number) => number;
export type TableGeneratorResult = {
    rows: number[]
    cols: number[]
    values: number[][]
};

export class TableGenerator {
    generate(nums: number[], cb: TableGeneratorCallback): TableGeneratorResult {
        const vals = [];
        for (const n1 of nums) {
            const r = [];
            for (const n2 of nums) {
                r.push(cb(n1, n2));
            }
            vals.push(r);
        }
        return {
            rows: nums,
            cols: nums,
            values: vals
        };
    }
}