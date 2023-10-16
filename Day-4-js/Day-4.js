for(i=10; i > 0; i-- ){
    console.log(i)
}

function Maxnumber(a,b,c,d){
    if(a<b && a<c && a<d){
        console.log("a is small")
    }else if(b<c && b<d){
        console.log("b is small")
    }else if(c<d){
        console.log("c is small")
    }else{
        console.log("d is max")
    }
}
Maxnumber(11,22,33,44)