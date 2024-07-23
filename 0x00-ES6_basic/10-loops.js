export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const element of array) {
    const value = element;
    // eslint-disable-next-line
    array[i] = appendString + value;
    i += 1;
  }

  return array;
}
