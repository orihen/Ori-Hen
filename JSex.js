var txt= "sdfhjk" ;
var txt1= txt.length ;



const d= new Date;
console.log(d);
var h =d.getHours();
console.log(h);


if (h<12){
    greeting= "good morning" ;
} else if(h<17){
    greeting= "good afternoon";
}
else {
    greeting= "good evening" ;
}
    


function greet(){
document.getElementById("P").innerHTML= greeting ; 
}


var cars = ["toyota", "honda" , "ford"];

console.log(cars[0]);

var i;
for ( i =0 ; i<cars.length ; i++){
cars[i]
}



var person = {
    Fname: "Ori" ,
    Lname: "Hen" ,
    Fullname: () =>{
        var Full= this.Fname +  " "+ this.Lname;
     return Full   
    }
}

console.log(person.Fullname())

