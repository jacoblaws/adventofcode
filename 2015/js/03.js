const fs = require('fs'), filename = process.argv[2];
const file = fs.readFileSync(filename, 'utf8').trim();

const parse_instruction = (x, y, inst) => {
  switch(inst) {
    case '^': ++y; break;
    case 'v': --y; break;
    case '>': ++x; break;
    case '<': --x; break;
    default: break;
  }
  return [x,y];
}

const part1 = () => {
  let x = y = 0;
  let grid = new Set();
  grid.add([x,y].toString());

  for (inst of file) {
    [x,y] = parse_instruction(x, y, inst);

    let house = [x,y].toString();
    if (!grid.has(house)) { grid.add(house); }
  }
  console.log('Part one: %d houses got at least one present', grid.size);
}

const part2 = () => {
  let x1 = x2 = y1 = y2 = 0;
  let grid = new Set();
  grid.add([x1,y1].toString());

  let robo_turn = false;
  for (const inst of file) {
    if (!robo_turn) {
      [x1,y1] = parse_instruction(x1, y1, inst);
      house = [x1, y1].toString();
    }
    else {
      [x2,y2] = parse_instruction(x2, y2, inst);
      house = [x2,y2].toString();
    }
    robo_turn = !robo_turn;

    if (!grid.has(house)) { grid.add(house); }
  }
  console.log('Part two: %d houses got at least one present', grid.size);
}

part1();
part2();
