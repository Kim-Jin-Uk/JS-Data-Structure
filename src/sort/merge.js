const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
};

export const mergeSort = (data) => {
  if (data.length <= 1) return data;
  const mid = Math.ceil(data.length / 2);
  const [left, right] = [data.slice(0, mid), data.slice(mid)];
  return merge(mergeSort(left), mergeSort(right));
};
