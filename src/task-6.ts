function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const number = getFirstElement<number>([1, 2, 3]); // 1
const string = getFirstElement<string>(["a", "b", "c"]); // "a"
const boolean = getFirstElement<boolean>([true, false, true]); // true

console.log(number);
console.log(string);
console.log(boolean);
