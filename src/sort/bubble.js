export const bubble = (data) => {
  for (let i = 0; i < data.length; i++) {
    let swap = false;
    for (let j = 0; j < data.length; j++) {
      if (data[i] > data[j]) {
        [data[i], data[j]] = [data[j], data[i]];
        swap = true;
      }
    }
    // 변경이 되지 않았다면 추가 탐색이 필요하지 않다
    if (!swap) break;
  }
  return data;
};
