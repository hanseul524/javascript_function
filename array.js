const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

/* concat() : 인자로 주어진 배열이나 값들을 기존 비열에 합쳐서 새 배열을 반환, 원본의 데이터 손상안됨 */
console.log(numbers.concat(fruits));

/* filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환 */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result);
// map과 filter의 차이
const mapArray = numbers.map(number => number < 3) // [true, true, false, false]
const filterArray = numbers.filter(number => number < 3) // [1, 2]

/* forEach() : 배열의 길이만큼 콜백 함수 반복적으로 실행 
(array매개변수는 잘 사용 안함) 리턴값이 없음 */
fruits.forEach(function (element, index, array) {
    console.log(element, index, array);
}); // Apple 0 ['Apple', 'Banana', 'Cherry']

// 화살표 함수로 변경했을때
fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`)
})

/* map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 
새로운 배열을 반환 
콜백함수의 매개 변수 (element, index) */
const array = [1, 4, 9, 16];
const map1 = array.map(i => i * 2);
console.log(map1); // Array [2, 8, 18, 32]

const b = fruits.map(function (fruit, index) {
    return {
        id: index,
        name: fruit
    }
});
console.log(b); 
// 화살표 함수 사용시 중간 로직이 없고 리턴값만 있을 경우 바로 입력 가능 
// 객체 데이터를 리턴할 경우 ()로 묶어서 사용
const c = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}));
console.log(c)

/* find() : 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환. 없다면 undefined 반환
   findIndex() : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환.
   만족하는 요소가 없으면 -1 반환 */
const a = fruits.find(fruit => /^B/.test(fruit))
console.log(a); //Banana

/* includes() : 배열이 특정 요소를 포함하고 있는지 판별 */
const i = numbers.includes(3)
console.log(i) //true

/* splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 */
// splice(배열 인덱스값, 인덱스 번호의 아이템 갯수 값, 끼워넣을 값)
numbers.splice(2, 1);
console.log(numbers); //[1, 2, 4]
