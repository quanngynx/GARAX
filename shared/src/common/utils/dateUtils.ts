export function transformBigInt_Date(value: bigint) {
  const manufacturingDate: bigint = BigInt(value);
  const dateObject = new Date(Number(manufacturingDate));
  // console.log(dateObject.toISOString());
  return dateObject;
} // 2024-04-03T00:00:00.000Z
