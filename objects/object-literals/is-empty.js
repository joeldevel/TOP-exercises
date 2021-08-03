// exercise from: https://javascript.info/object#check-for-emptiness

function isEmpty(obj) {
    //let count = 0;
    for(let key in obj) {
        //if( key != 'undefined') {
          //  count++;
        //}
        return false;
    }
    //return count === 0;
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
