const fs = require('fs');
const crypto = require('crypto');
const file = fs.readFileSync(process.argv[2], 'utf-8').trim();

const MD5 = (input) => crypto.createHash('md5').update(input).digest('hex');
const leading_zeros = (input, num_zeros) => BigInt(input) >> (128n - (BigInt(num_zeros) * 4n)) == 0;

const find_lowest_int = (num_leading_zeros) => {
  let lowest_int = 1;
  while (true) {
    let hash = MD5(file.concat(lowest_int.toString()));
    if (leading_zeros(parseInt(hash, 16), num_leading_zeros)) break;
    ++lowest_int;
  }
  return lowest_int;
}

const part1 = () => {
  const lowest_int = find_lowest_int(5);
  console.log('The lowest positive integer to find the MD5 hash with five leading (hex) zeros is: %d', lowest_int);
}

const part2 = () => {
  const lowest_int = find_lowest_int(6);
  console.log('The lowest positive integer to find the MD5 hash with six leading (hex) zeros is: %d', lowest_int);
}

part1();
part2();
