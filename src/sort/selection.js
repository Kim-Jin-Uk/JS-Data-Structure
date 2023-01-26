export const selection = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    let top = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[top] < data[j]) top = j;
    }
    [data[top], data[i]] = [data[i], data[top]];
  }
  return data;
};
