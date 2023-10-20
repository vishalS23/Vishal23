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
array.unshift(23);
console.log(array);

//map
var multibytwo = array.map((i) => i*2)
console.log(multibytwo, 'multibytwo')

