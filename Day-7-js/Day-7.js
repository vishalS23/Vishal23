//push add element in the last 
const mobiles = ['samsung', 'apple', 'oppo','vivo']
console.log(mobiles)

const count = mobiles.push('mi')

console.log(mobiles);

//pop remove last element from the list
const students = ['vishal', 'rahul', 'rushi', 'yash', 'gaurav', 'nishant'];
console.log(students.pop())
console.log(students)
students.pop();
console.log(students)

// shift 
const array = [1,2,3,4]
const firstname = array.shift()
console.log(array);
console.log(firstname);
array.shift()
console.log(array)

//unshift
var array = [3,4,5,6,7,8,9] 
array.unshift(2)
array.unshift(1)
array.unshift(0)
console.log(array)

//map
var array = [1,2,3,4,5]
var multibytwo = array.map((i) => i * 2)

console.log(multibytwo, 'multibytwo')