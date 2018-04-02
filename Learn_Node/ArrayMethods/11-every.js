/*
    Check out EVERY element in the array for somehting.

    The every() method tests whether all elements in the array 
    pass the test implemented by the provided function.
*/

var people_ages = [67, 88, 93, 68, 1, 77, 89, 85, 99, 100];

function oldEnough(element, index){
    if(element >= 65){
        console.log(`element [${index}] is old enough (${element} years old`);
        return true;
    }
    else{
        console.log(`element [${index}] is NOT old enough (${element} years old)`);
        return false;
    }
}

var every_one_old_enough = people_ages.every(oldEnough);
console.log(`therefore it is ${every_one_old_enough} that EVERY one is old enough`);