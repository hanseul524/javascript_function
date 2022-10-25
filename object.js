/* Object.propotype */
/* Object.assign() : 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용 */
// Object.assign(대상객체, 출처 객체) => Object는 자바스크립트 전역객체 
//(실제 생성한 객체에는 사용할 수 없는 static method)
const userAge = {
    name: 'Heropy',
    age: 85
}
const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) //true

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) //다른 메모리 주소를 바라보기 때문에 false

/* Object.keys() : 주어진 객체의 key값을 추출해서 반복문을 통해 새로운 배열로 반환 (객체의 key값 순서대로) */
const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values) // ['Heropy', 85, 'thesecon@gmail.com']

