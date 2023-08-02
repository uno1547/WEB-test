/*let tmp = ""
for (i = 1; i <= 4; i++) {
  console.log(`i는 ${i}`)
  for (k = 0; k < 4 - i; k++) {
    tmp += "공"
  }
  //for (j = 4; j > i; j--) 이것도 가능 
  for (j = 1; j <= 2*i - 1; j++) {
    tmp += "*"
    // console.log(`별 ${j}개`)
  }
  tmp += '\n'
}
console.log(tmp)*/
/*          i  @  #
@@@@#       1  4  1
@@@###      2  3  3
@@#####     3  2  5
@#######    4  1  7
#########   5  0  9
@#######    6  1  7 
@@#####     7  2  5
@@@###      8  3  3
@@@@#       9  4  1
*/       
let output = ''
