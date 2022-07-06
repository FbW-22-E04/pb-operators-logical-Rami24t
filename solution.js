// 1. 
let isDogBetter = true;
let isCatBetter = false;
console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));

// 2.
let atoms = 900;
let sandGrains = 10;
let starsInSky = 20;

// 3.
console.log(atoms>starsInSky&&atoms>sandGrains);
//3.a
console.log(atoms!==sandGrains);
console.log(starsInSky<sandGrains || starsInSky > atoms);
console.log(atoms == starsInSky||atoms!==sandGrains);
console.log(atoms>=10&&sandGrains<=10);
console.log(atoms*starsInSky<100 || atoms*sandGrains>100);
 
