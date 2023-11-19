export function bigIntReplacer(key: any, value: any) {
  if (typeof value === "bigint") {
    return value.toString() + "n"; // or simply return value.toString();
  }
  return value;
}
