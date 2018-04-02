/*
    Check out SOME element in the array for somehting.

    The some() method tests whether at least one element in the array 
    passes the test implemented by the provided function.
*/

var people_ages = [67, 88, 93, 68, 1, 77, 89, 85, 99, 100];

function youngEnough(element, index){
    if(element < 65){
        console.log(`element [${index}] is young enough (${element} years old)`);
        return true;
    }
    else{
        console.log(`element [${index}] is NOT young enough (${element} years old)`);
        return false;
    }
}

var some_one_young_enough = people_ages.some(youngEnough);
console.log(`therefore it is ${some_one_young_enough} that SOME one is young enough`);