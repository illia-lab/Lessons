const a: { [k: string]: null } = {};
const b: { [k: string]: null } = { a: null };
const c: { [k: string]: null } = { a: null, 'super field': null };
const e: { [k: string]: null } = { a: null, 'super field': null, ' a b c ': null };
const f: { [k: string]: string } = { a: 1 };

interface Test {
  myFn: (a: number, b: string) => Promise<void>;
  myField1: null;
  myField2: number;
  myField3?: string;
}

const myTest: Test = {
  myFn: (a: number, b: string) => Promise.resolve(),
  myField1: null,
  myField2: 2,
};
