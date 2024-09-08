const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const count = (weakMap.get(endpoint) || 0) + 1;
  if (count >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, count);
}

export { weakMap, queryAPI };
