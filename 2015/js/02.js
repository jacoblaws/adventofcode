const fs = require('fs'), filename = process.argv[2];
const file = fs.readFileSync(filename, 'utf8').trim().split('\n')

const part1 = () => {
  let sqr_ft = 0;
  for (const i in file) {
    let [l, w, h] = file[i].split('x').map(Number);

    let a1 = l*w;
    let a2 = w*h;
    let a3 = h*l;
    let min_area = Math.min(a1, a2, a3);

    sqr_ft += 2 * (a1 + a2 + a3) + min_area;
  }
  console.log('The elves should order %d ft^2 of wrapping paper', sqr_ft);
}

const part2 = () => {
  let ribbon_ft = 0;
  for (const i in file) {
    let [s1, s2, s3] = file[i].split('x').map(Number).sort((a, b) => a - b);

    let wrap_ft = 2 * (s1 + s2);
    let bow_ft = s1 * s2 * s3;

    ribbon_ft += wrap_ft + bow_ft;
  }
  console.log('The elves should order %d ft of ribbon', ribbon_ft);
}

part1();
part2();
