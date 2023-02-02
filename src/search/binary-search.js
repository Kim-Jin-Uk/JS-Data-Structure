export const binarySearch = (list, target) => {
  let mid = 0;
  let [left, right] = [0, list.length - 1];
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === target) return mid;
    // 대소 비교로 범위 지정
    if (list[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};
