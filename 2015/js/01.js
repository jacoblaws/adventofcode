const fs = require('fs'), filename = process.argv[2];
const file = fs.readFileSync(filename, 'utf8');

var floor = 0;
var first_basement_pos = 0;

for (let i = 0; i < file.length; ++i) {
  switch(file[i]) {
    case '(': ++floor; break;
    case ')': --floor; break;
    default: break;
  }

  if (!first_basement_pos && floor < 0) {
    first_basement_pos = i + 1;
  }
}

console.log('The final floor was: %d', floor);
console.log('The first basement instruction was: %d', first_basement_pos);
