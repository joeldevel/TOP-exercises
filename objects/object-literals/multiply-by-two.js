//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for(key in obj) {
        if( typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(menu);
