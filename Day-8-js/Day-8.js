//ForEach
const array = ['a','b','c']

array.forEach((element)=>console.log(element))

// Reduce

const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 15

//sort
const names =[ 'vishal','nishant' , 'nikhil', 'gaurav', 'rushi'];
names.sort();
console.log(names);

const array2 = [3,6,2,1,7,8,4,9,5];
array2.sort();
console.log(array2);

const array3 = [3,5,7,45,34,23,87,9,4];
array3.sort((a,b)=>a-b);
console.log(array3);

const array4 = [1,2,3,4,5,6,7,8,9];
array4.sort((a,b)=>b-a);
console.log(array4);

//object 
var myobject = {studentcount: 5, studentlist:['vishal','rushi','nishant', 'nikhil','gaurav']}
console.log(myobject.studentlist);
console.log(myobject.studentcount);
console.log(myobject.studentlist[3]);
