export function sort(arr) {
  arr.sort((a, b) => b.health - a.health);

  return arr;
}
