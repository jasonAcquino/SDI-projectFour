//alert("JavaScript works!");

// Jason Acquino
// December 16, 2014
// SDI 1412 Project 4





//STRING FUNCTIONS

// 1. Does a string follow a 123-456-7890 pattern like a phone number?

var numberCheck;
var testNumber = "212-867-5309";
    
    var numberCheck = function(numberGiven){
        numberGiven.length
        if (numberGiven.length === 12) {
        }
        if (numberGiven.charAt(3) && numberGiven.charAt(7) === "-") {
        return true;
        }
        else {
         return false;
        };
 
    };
    
var validNumber = numberCheck(testNumber)
if (validNumber === true) {
    console.log("valid number")
} else
    console.log ("invalid number")



// 2. Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailCheck;
var testEmail = "janedoe@gmail.com";

var emailCheck = function(emailGiven){
    if (emailGiven.indexOf("@") === -1) {
        return false;
    }if (emailGiven.indexOf(".") === -1) {
        return false;
    } else
        return true;
    
    
    
};

var validEmail = emailCheck(testEmail);
if (validEmail === true) {
    console.log("valid email address")
};
if (validEmail === false) {
    console.log("invalid email address")
};



// 3. Is the string a URL (Does it start with http:// or https://)?

var urlCheck;
var testUrl = "https://www.youtube.com";

var urlCheck = function (possibleUrl) {
    if ((possibleUrl.substr(0,7) === "http://") || (possibleUrl.substr(0,8) === "https://")) {
        return true;
    } else
        return false;

};

var validUrl = urlCheck(testUrl);
if (validUrl === true) {
    console.log("valid url")
};
if (validUrl === false) {
    console.log("invalid url")
};

// 4. Title-case a string (split into words, then uppercase the first letter of each word).





/* 5. Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the first separator changed to the second: Òa,b,cÓ +
Ò,Ó + Ò/Ó --> Òa/b/cÓ*/





//NUMBER FUNCTIONS

//Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.






/*Fuzzy-match a number: is the number above or below a number within a certain
percent?*/







//Find the number of hours or days difference between two dates.






/*Given a string version of a number, such as Ò42Ó, return the value as an actual Number
data type, such as 42.*/







//ARRAY FUNCTIONS

//Find the smallest value in an array than is greater than a given number.






/*Find the total value of just the numbers in an array, even if some of the items are not
numbers.*/






/*Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: ÒaÓ + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].*/


















