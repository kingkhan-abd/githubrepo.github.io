// Question no:1
var city = prompt("Enter city name where you live!...");
if(city == "karachi"){
    alert("Welcome to the city of lights!...\n" + city);

}
else{
    alert("your city is not karachi!...")
}

// Question no:2
var gender = prompt("What is your gender!...");
if(gender == "male"){
    alert("Good Morning Sir!...")

}
if(gender == "female"){
    alert("Good Morning Madam!...")

}
 
// Question no:3
var signalColor = prompt("Enter the traffic signal!...");
if(signalColor == "Red"){
    alert("Must Stop!...")
}
if(signalColor == "Yellow"){
    alert("Ready to move!...")
}
if(signalColor == "Green"){
    alert("Move now!...")
}

// Question no:4
var remainingFuel = +prompt("How many  litres of petrol does you car have!...");
if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car!...");

}

// Question no:5\
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
     var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }



// Question no:8
var number = +prompt("Enter number");
if(number%3 == 0){
    alert("number is divisible by 3")
}
else{
    alert("number is not divisble")
}

// Question no:9
var number = +prompt("Enter number");
if(number%2 == 0){
    alert("It is even number ")
}
else{
    alert("It is not even number")
}

// var myArray = ["apple","mango","banana"]
// var temp;
//  temp = myArray[2];
//  myArray[2] = myArray[0];
//  myArray[0] = temp;
//  console.log(myArray
    
//     );


