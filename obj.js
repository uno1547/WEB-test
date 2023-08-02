const person = {
  name : 'pet',
  'home' : 'kor'
}

console.log(person)
person.age = 16
person.grade = 4.2
person['family'] = 3
console.log(person)
delete person.age
delete person['family']
console.log(person)

const obj = {
  age : 18, 
  'name' : 'hi',
  lang : {age : 20, 'name' : "hello"},
  talk : function(x) {
    console.log(this)
    console.log(`${this}객체의 ${this[x]} ${this.x} 와${this.lang[x]}`)
  }
}
obj.talk('name') // 객체의 속성에 접근할때 '.' 온점으로 접근하면 undefined출력가능 음 인수로들어갈때 문자열로 주기때문인듯그래서 '[]'사용권장