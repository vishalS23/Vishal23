function Storedata(){
    var myclass = {noofstudents:10, totalstudents:20}
    localStorage.setItem("mydata",JSON.stringify(myclass))
    alert("Data added to LS successfully")
    return
}

function Retrivedata(){
        const DatafromLS =JSON.parse(localStorage("mydata"))
        console.log(DatafromLS,"-Data here")
        alert(`${DatafromLS.noofstudents} - NO OF STUDENTS`)
        return
    }

function Deletedata(){
    localStorage.removeItem("mydata");
    alert("Data deleted successfully done")
}    