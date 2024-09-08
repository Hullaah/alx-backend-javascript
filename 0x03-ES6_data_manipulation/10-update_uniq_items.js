export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }
  const groceriesList = Array.from(groceries);
  groceriesList.forEach(([name, price]) => {
    if (price === 1) groceries.set(name, 100);
  });
}
