var Myname = ["vishal", "rahul", "nishant", "gaurav"]

localStorage.setItem("Myname",JSON.stringify(Myname));//store data

var Data = JSON.parse(localStorage.getItem("Myname"));//read

console.log(Data, "Data from local storage");

localStorage.removeItem("Myname");//Delete data