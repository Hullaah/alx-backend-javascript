export default function hasValuesFromArray(set, arr) {
  return set.isSupersetOf(new Set(arr));
}
