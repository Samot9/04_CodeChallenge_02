/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

var user = prompt ("Please enter your user")
var age = prompt("Please enter your Age")


// alter = ">= 0 && <=5";
// alter = ">= 6 && age <= 12";
// alter = ">= 13 && age <= 17";
// alter = ">= 18";

switch (true) 
{
    case (age >= 0 && age <= 5):
        console.log(user + ", you should have some milk.");
        break;
    case (age >= 6 && age <= 12):
        console.log(user + ", you should have some juice.");
        break;
    case (age >= 13 && age <= 17):
        console.log(user + ", you should have some cola.");
        break;
    case (age >= 18):
        console.log(user + ", you should have some wine.");
        break;
    default:
        console.log("Invalid age input.");
        break;
}