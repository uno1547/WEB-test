function min(arr) {
  let min = arr[0]
  for (num of arr) {
    if (num < min) {
      min = num
    }
  }
  console.log(min)
  return min
}
min([10,29,3,6,29,45,4])
function rest (...items) {
  console.log(items)
}
// rest(1,2,3,45,6,7,4,56)
// rest([1,2,3,4,5],[1,45,7])
function sample(a, b, ...c) {
  console.log(a,b,c)
}
// sample(1,6,2,67,8,4,2)
//함수의 인수 > 1,2,3,4,6,8,9 or [1,5,7,2,7,9]
function min(arr, ...rest) {
  if (Array.isArray(arr)) { //주어진 인수 arr로 들어온게 배열일경우
    for (num of arr) {
      output = arr[0]
    }
  }
}
function earnings(name, wage = 8590, hours = 40) {
  console.log(name, wage, hours)
}
// earnings('pet', 10000)
const max1 = function(array) {
  let output = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > output) {
      output = array[i]
    }
  }
  return output
}
const max2 = function(...array) { //숫자가인수로들어오면 매개변수가 배열로 들어옴
  let output = array[0]
  for (x of array) {
    console.log(x)
    if (x > output) {
      output = x
    }
  }
  console.log(output)
}
const max3 = function(first, ...rest) {
  let output
  let items
  if (Array.isArray(first)) {
    output = first[0]
    items = first
    console.log(output, items)
  } else {
    output = first //firstNum 
    items = rest
    console.log(output, items)
  }
  for (x of items) {
    if (x > output) {
      output = x
    }
  }
  return output
}
// console.log(max3([5,2,3,4]))
// console.log(max3(5,2,3,4,1))
function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i)
  }
}
callThreeTimes(function (x) {
})
let numbs = [273, 25, 75, 52, 103, 32, 57, 24, 76]
numbs = numbs.filter((x) => x % 2 !== 0)
.filter((x) => x <= 100)
.filter((x) => x % 5 === 0)
console.log(numbs)
const array = ['사과', '배', '귤', '바나나']
array.forEach((v,i) => console.log(i))
array.forEach((v,i) => console.log(v))
