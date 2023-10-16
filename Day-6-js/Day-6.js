//find the even and odds?
var numbers = [23,54,34,98,90,69,56,53,89,13]

function findSumandEven(array){

    for(var i = 0; i < array.length; i++){

        if(array[i] % 2 == 0){
            console.log(`${array[i]} this is even`)
        }else{
            console.log(`${array[i]} this is odd`)
        }
    }
}
findSumandEven (numbers)


//find out the cont of even and odds
var numbers = [23,54,34,98,90,69,56,53,89,13]

function findSumandEven(array){

    var oddcount = 0;
    var evencount = 0;

    for(var i = 0; i<array.length; i++){

        if(array[i] % 2 ==0){
            evencount++;
        }else{
            oddcount++;
        }
    }
    console.log(evencount,"evencount")
    console.log(oddcount,"oddcount")
}
findSumandEven(numbers)