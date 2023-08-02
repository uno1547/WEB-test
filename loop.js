let arr = [1, 3, 7, 9, 11]
for (let i in arr) { //반복변수에 배열요소의 인덱스가 들어옴 > 요소 접근시 arr[]로 뽑아내야함 
  console.log(i, arr[i])
}
let std = {name : 'john', lastName : 'Doe'}
for (let x in std) {
  console.log(x, std[x])
}
for (let x of arr) { //반복변수 x에 배열요소의 값이 바로들어옴 > index로 추출할필요없음
  // console.log(x)
  // console.log(arr[x])
}
let i = 2
console.log(i)
for (let i = 0; i < 4; i++) {
  console.log(i)
}
console.log(i)