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

//const a = { k: 123 }
//const b = { k: 123 }
//console.log(a === b) //다른 메모리 주소를 바라보기 때문에 false

/* Object.keys() : 주어진 객체의 key값을 추출해서 반복문을 통해 새로운 배열로 반환 (객체의 key값 순서대로) */
const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
    address: 'USA'
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values) // ['Heropy', 85, 'thesecon@gmail.com']

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
// 변수에 기본값 할당 시 객체에 데이터가 없을 경우 할당연산자를 통해 기본값 지정
const { name: heropy, age, address = 'Korea' } = user
// E.g, user.address
// 구조분해할당을 통해서 객체의 데이터를 꺼내올 수 있음
// 데이터의 이름을 그대로 사용하고 싶지 않다면 뒤에 변수로 명시해줌

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${heropy}의 나이는 ${age}세 입니다.`)
console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

// 배열의 구조 분해 할당
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
const [, , b] = fruits // 활용하지 않을 변수는 명시해주지 않음
console.log(b)

// 전개 연산자 (Spread)
console.log(fruits)
console.log(...fruits) // 전개연산자는 배열 데이터를 문자열로 출력
// console.log('Apple', 'Banana', 'Cherry')

const toObject = (a, b, ...c) => ({ a, b, c })
// 화살표 함수에서 리턴값만 있고 중간 로직이 없다면 생략 가능, 반환이 객체 데이터일 경우
// {}만 사용하는 것이 아닌 객체를 ()로 감싸줘야 값 출력
//function toObject(a, b, ...c) { // ...c: 나머지 매개변수 (Rest Parameter)
    // return {
    //     a: a, 
    //     b: b, 
    //     c: c
    // }
//}
console.log(toObject(...fruits))

