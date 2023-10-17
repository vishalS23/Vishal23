//nested for loops

var array = [23,3,5,7,5,4,34,55,67,8,90,7,60,2,6]
var target = 30;

for(i = 0; i< array.length-1; i++){

    for (var j=i+1; j< array.length; j++){

        if(array[i]+array[j] == target){

            console.log(`${array[i]} + ${array[j]}==${target}`)
        }
    }
}