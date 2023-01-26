export const quick = (data) => {
  if (data.length <= 1) return data;
  const [left, right] = [[], []];
  const pivot = data[0];
  for (let i = 1; i < data.length; i++) {
    if (pivot < data[i]) left.push(data[i]);
    else right.push(data[i]);
  }
  return [...quick(left), pivot, ...quick(right)];
};
