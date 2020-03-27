let array = [1,2,[3,4]];
let flatArray = array.reduce((a, b) => a.concat(b), []);
console.log(flatArray); //-> [1,2,3,4]
