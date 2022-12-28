const transformToSpiral = (inputArr) => {
  const col = 4;
  let start = 0;
  const arrLength = inputArr.length;
  const j = arrLength / col;
  const matrix = [];

  for (let i = 0; i < j; i++) {
    matrix.push(inputArr.slice(start, start + col));
    start = start + col;
  }

  let dir = "right";
  const switchDirFrom = {
    right: "down",
    down: "left",
    left: "up",
    up: "right",
  };
  const temp = {};
  let a = 0,
    b = 0;
  let next = matrix[a][b];
  const result = [];
  let spin = 0;

  for (let x = 0; x < arrLength; x++) {
    if (spin > 3) break;
    if (next == undefined || temp[next]) {
      dir = switchDirFrom[dir];
      x--;
      spin++;
      [a, b, next] = computeNext(dir, a, b, matrix);
      continue;
    }
    if (!temp[next]) {
      result.push(next);
      temp[next] = true;
      spin = 0;
    }
    [a, b, next] = computeNext(dir, a, b, matrix);
  }

  console.log(matrix);
  console.log(result);
};

function computeNext(dir, a, b, matrix) {
  switch (dir) {
    case "right":
      b++;
      break;
    case "down":
      a++;
      break;
    case "left":
      b--;
      break;
    case "up":
      a--;
      break;
  }
  return [a, b, matrix[a][b]];
}

transformToSpiral([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
