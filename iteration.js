let arr = [1, 2, 3, 4, 5, 6]
function reverse(value, index) {
  // arr[index] = -value
}
// console.log(arr)
function time10(value) {
  return value * 10
}
function whatIsfla(value) {
  return value * 5
}
function filterPositive(value) {
  return value > 0 
}
function reducer(total, value) { // 첫 callback때,initialValue지정따로 안했을시, total에 배열의 0번째요소 할당후, 배열의 1번째요소 부터 순회시작 reduce 호출시 두번째 인수로 initialValue넣어주면 첫 callback부터 배열의 0번째요소 순회
  console.log(total, value)
  return total + value
}
console.log(arr.reduce(reducer))
/* forEach
arr.forEach(reverse)
*/
/* filter 
let arrPos = arr.filter(filterPositive)
console.log(arrPos, arr)
*/

/* map
let arr10 = arr.map(time10)
console.log(arr, arr10)
*/
/* flatMap
let arrFlat = arr.flatMap(whatIsfla)
console.log(arrFlat)
*/
// let arr1 = ['1', '2', '3']