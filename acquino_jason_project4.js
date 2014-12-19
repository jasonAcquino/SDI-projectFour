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

var caseFix = function (stringGiven) {
    var eachWord = stringGiven.split(" ");
    var uppercase = "";
    
    for (i = 0; i < eachWord.length; i++) {
        eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substring(1, eachWord[i].length);
    };
        for (i = 0; i < eachWord.length; i++) {
            uppercase = uppercase + eachWord[i] + " ";
        };
        
        return uppercase;
    
};

console.log(caseFix("bobby brown from new edition"));

/* 5. Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the first separator changed to the second: “a,b,c” +
“,” + “/” --> “a/b/c”*/

var changeSeparator = function (originalString, replacedSeparator, newSeparator) {
    var subString = originalString.split(replacedSeparator);
    var newString = "";
    
    for (i = 0; i < subString.length; i++) {
        if (i < subString.length -1) {
            newString = newString + subString[i] + newSeparator;
        } else {
            newString = newString + subString[i];
        };
        
    };
    return newString;
    
};

console.log(changeSeparator("Ronnie,Bobby,Ricky", ",", "/"));



//NUMBER FUNCTIONS

// 6. Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.

var changeDecimal = function(number, decimalPlace) {
    return number.toFixed(decimalPlace);  
    
};

console.log(changeDecimal(22.2222, 2));


/* 7. Fuzzy-match a number: is the number above or below a number within a certain
percent?*/







// 8. Find the number of hours or days difference between two dates.






/* 9. Given a string version of a number, such as “42”, return the value as an actual Number
data type, such as 42.*/

var valueSwap = function(givenString) {
    if (givenString == isNaN) {
        return 0;
    } else {
        return Number(givenString);
    }
    
};
console.log(valueSwap("5"));




//ARRAY FUNCTIONS

// 10. Find the smallest value in an array than is greater than a given number.






/* 11. Find the total value of just the numbers in an array, even if some of the items are not
numbers.*/

var theArray = ["Ronnie", "Bobby", 5, "Ricky", 10, "Mike", 20, "Ralph"];
var solution;

    var addNumbers = function (theArray) {
        var sum = 0;
        for (var i in theArray) {
            if (!isNaN(theArray[i]) && typeof(theArray[i]) != "New Edition") {
                sum += theArray[i];
            };
        };
        return sum;
            
    };

solution = addNumbers(theArray);
console.log(solution);



/* 12. Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].*/


















