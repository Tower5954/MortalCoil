function lifeInWeeks(age){

    age = prompt("How old are you in years? ")
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months remaining");



}

lifeInWeeks();