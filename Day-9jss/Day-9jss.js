var names = ["dhanush","bhavesh","amit","vishal"];
names.sort();
console.log(names);

var numbers = [9,8,6,53,6,3,1,3,2,0];
numbers.sort();
console.log(numbers);

var numbers2 = [9,8,7,6,5,4,3,2,1,0];
numbers2.sort((a,b) => b-a);
console.log(numbers2);

var numbers3 = [9,8,7,6,5,4,3,2,1,0];
numbers3.sort((a,b) => a-b);
console.log(numbers3);

var myobject = {mystudents: "one hundred"}
var result = JSON.stringify(myobject);
console.log(result);
console.log(result.mystudents);

result = JSON.parse(result);
console.log(result);
console.log(result.mystudent)