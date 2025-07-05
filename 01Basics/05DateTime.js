let mydate = new Date();
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toUTCString()) //Universal Time Coordinated 
console.log(mydate.toDateString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.getTimezoneOffset()) // This offset represents the difference between Universal Coordinated Time (UTC) and
                                        //  the local time of the system where the JavaScript code is being executed. 
                                        // returns an integer representing the difference in minutes.

let datelength = Date.length; // returns the number of arguments expected by the Date constructor, which is 7.
console.log(datelength);  //year, month, day, hour, minute, second, and millisecond.

let timestmp = Date.now();
console.log(timestmp); // time in millisecond from 1 jan 1970
console.log(timestmp.toExponential());// millisecond time in exponential 
console.log(timestmp.toLocaleString());// 17,51,68,40,70,572

let givetime  = new Date("2025-11-30");
console.log(givetime.toLocaleDateString());

