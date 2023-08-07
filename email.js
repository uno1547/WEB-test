let input = document.querySelector('input')
let notice = document.querySelector('p')
let isEmail = (value) => {
  console.log(value)
  return (value.indexOf('@') >= 1) && (value.split('@')[1].indexOf('.') >= 1)
}
input.addEventListener('keyup', function() {
  let value = this.value
  if (isEmail(value)) {
    notice.textContent = "다음을 입력하세요"
  } else {
    notice.textContent = "올바론 형식이아닙니다"
  }
})