export const insertion = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (data[j] > data[j - 1])
        [data[j], data[j - 1]] = [data[j - 1], data[j]];
      else break;
    }
  }
  return data;
};
