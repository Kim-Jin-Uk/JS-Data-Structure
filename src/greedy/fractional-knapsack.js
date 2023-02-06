// 부분 배낭 문제
// 무게 제한이 k인 배낭에 최대 가치를 가지도록 물건을 넣는 문제
// 각 물건은 무게(w)와 가치(v)로 표현될 수 있음
// 물건의 일부분이 배낭에 넣어질 수 있다
const getMaxValue = (dataList, capacity) => {
  dataList.sort((a, b) => b.v / b.w - a.v / a.w);
  const datas = [];
  for (const { v, w } of dataList) {
    if (capacity > w) {
      datas.push([v, w, 1]);
      capacity -= w;
    } else {
      const fraction = capacity / w;
      datas.push([v, w, fraction]);
      break;
    }
  }
  return datas;
};

console.log(
  getMaxValue(
    [
      { v: 100, w: 20 },
      { v: 50, w: 30 },
      { v: 200, w: 70 },
    ],
    70
  )
);
