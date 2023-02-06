// 동전 문제
// 지불해야 하는 값이 x원 일 때 1원 50원 100원, 500원 동전으로 동전의 수가 가장 적게 지불하시오.
// 가장 큰 동전부터 최대한 지불해야 하는 값을 채우는 방식으로 구현 가능하다
// 탐욕 알고리즘으로 매순간 최적이라고 생각되는 경우를 선택하면 된다

const coinList = [500, 100, 50, 1];
const minCoinCount = (value) => {
  let count = 0;
  const coins = [];
  for (const coin of coinList) {
    if (coin > value) continue;
    const coinNum = Math.floor(value / coin);
    value -= coinNum * coin;
    count += coinNum;
    coins.push([coin, coinNum]);
  }
  return [count, coins];
};
console.log(minCoinCount(4320));
