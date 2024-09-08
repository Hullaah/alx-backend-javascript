export default function cleanSet(set, startString) {
  const arr = Array.from(set);
  return arr
    .filter((x) => x.startsWith(startString))
    .map((x) => x.replace(startString, ''))
    .join('');
}
