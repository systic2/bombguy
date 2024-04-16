const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;
const TPS = 2;
const DELAY = FPS / TPS;

enum RawTile {
  AIR,
  UNBREAKABLE,
  STONE,
  BOMB,
  BOMB_CLOSE,
  BOMB_REALLY_CLOSE,
  TMP_FIRE,
  FIRE,
  EXTRA_BOMB,
  MONSTER_UP,
  MONSTER_RIGHT,
  TMP_MONSTER_RIGHT,
  MONSTER_DOWN,
  TMP_MONSTER_DOWN,
  MONSTER_LEFT,
}
interface Tile2 {
  isAir(): boolean;
  isUnbreakable(): boolean;
  isStone(): boolean;
  isBomb(): boolean;
  isBombClose(): boolean;
  isBombReallyClose(): boolean;
  isTmpFire(): boolean;
  isFire(): boolean;
  isExtraBomb(): boolean;
  isMonsterUp(): boolean;
  isMonsterRight(): boolean;
  isTmpMonsterRight(): boolean;
  isMonsterDown(): boolean;
  isTmpMonsterDown(): boolean;
  isMonsterLeft(): boolean;
}
class Air implements Tile2 {
  isAir(): boolean {
    return true;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class Unbreakable implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return true;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class Stone implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return true;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class Bomb implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return true;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class BombClose implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return true;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class BombReallyClose implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return true;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class ExtraBomb implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return true;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class Fire implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return true;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class MonsterDown implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return true;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class MonsterLeft implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return true;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class MonsterRight implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return true;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class MonsterUp implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return true;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class TmpFire implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return true;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class TmpMonsterDown implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return true;
  }
  isTmpMonsterRight(): boolean {
      return false;
  }
}
class TmpMonsterRight implements Tile2 {
  isAir(): boolean {
    return false;
  }
  isUnbreakable(): boolean {
      return false;
  }
  isStone(): boolean {
      return false;
  }
  isBomb(): boolean {
      return false;
  }
  isBombClose(): boolean {
      return false;
  }
  isBombReallyClose(): boolean {
      return false;
  }
  isExtraBomb(): boolean {
      return false;
  }
  isFire(): boolean {
      return false;
  }
  isMonsterDown(): boolean {
      return false;
  }
  isMonsterLeft(): boolean {
      return false;
  }
  isMonsterRight(): boolean {
      return false;
  }
  isMonsterUp(): boolean {
      return false;
  }
  isTmpFire(): boolean {
      return false;
  }
  isTmpMonsterDown(): boolean {
      return false;
  }
  isTmpMonsterRight(): boolean {
      return true;
  }
}
enum RawInput {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  PLACE,
}
interface Input {
  isUp(): boolean;
  isDown(): boolean;
  isLeft(): boolean;
  isRight(): boolean;
  isPlace(): boolean;
  handle(): void;
}

class Up implements Input {
  isUp(): boolean {
      return true;
  }
  isDown(): boolean {
      return false;
  }
  isLeft(): boolean {
      return false;
  }
  isRight(): boolean {
      return false;
  }
  isPlace(): boolean {
      return false;
  }
  handle() {
    move(0, -1);
  }
}

class Down implements Input {
  isUp(): boolean {
      return false;
  }
  isDown(): boolean {
      return true;
  }
  isLeft(): boolean {
      return false;
  }
  isRight(): boolean {
      return false;
  }
  isPlace(): boolean {
      return false;
  }
  handle() {
    move(0, 1);
  }
}

class Left implements Input {
  isUp(): boolean {
      return false;
  }
  isDown(): boolean {
      return false;
  }
  isLeft(): boolean {
      return true;
  }
  isRight(): boolean {
      return false;
  }
  isPlace(): boolean {
      return false;
  }
  handle() {
    move(-1, 0);
  }
}

class Right implements Input {
  isUp(): boolean {
      return false;
  }
  isDown(): boolean {
      return false;
  }
  isLeft(): boolean {
      return false;
  }
  isRight(): boolean {
      return true;
  }
  isPlace(): boolean {
      return false;
  }
  handle() {
    move(1, 0);
  }
}

class Place implements Input {
  isUp(): boolean {
      return false;
  }
  isDown(): boolean {
      return false;
  }
  isLeft(): boolean {
      return false;
  }
  isRight(): boolean {
      return false;
  }
  isPlace(): boolean {
      return true;
  }
  handle() {
    placeBomb();
  }
}

let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 0, 0, 0, 1],
  [1, 2, 1, 2, 1, 0, 1, 0, 1],
  [1, 2, 2, 2, 2, 0, 0, 10, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let map: Tile2[][];
function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}
function transformTile(tile: RawTile) {
  switch(tile) {
    case RawTile.AIR: return new Air();
    case RawTile.BOMB: return new Bomb();
    case RawTile.BOMB_CLOSE: return new BombClose();
    case RawTile.BOMB_REALLY_CLOSE: return new BombReallyClose();
    case RawTile.EXTRA_BOMB: return new ExtraBomb();
    case RawTile.FIRE: return new Fire();
    case RawTile.MONSTER_DOWN: return new MonsterDown();
    case RawTile.MONSTER_LEFT: return new MonsterLeft();
    case RawTile.MONSTER_RIGHT: return new MonsterRight();
    case RawTile.MONSTER_UP: return new MonsterUp();
    case RawTile.STONE: return new Stone();
    case RawTile.TMP_FIRE: return new TmpFire();
    case RawTile.TMP_MONSTER_DOWN: return new TmpMonsterDown();
    case RawTile.TMP_MONSTER_RIGHT: return new TmpMonsterRight();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    default: assertExhausted(tile);
  }
}
function transformMap() {
  map = new Array(rawMap.length);
  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);
    for (let x = 0; x < rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x]);
    }
  }
}
let inputs: Input[] = [];

let delay = 0;
let bombs = 1;
let gameOver = false;

function explodeFire(x: number, y: number) {
  if (map[y][x].isStone()) {
    if (Math.random() < 0.1) map[y][x] = new ExtraBomb();
    else map[y][x] = new Fire();
  } else if (!map[y][x].isUnbreakable()) {
    if (
      map[y][x].isBomb() ||
      map[y][x].isBombClose() ||
      map[y][x].isBombReallyClose()
    )
      bombs++;
    map[y][x] = new Fire();
  }
}

function explodeTmpFire(x: number, y: number) {
  if (map[y][x].isStone()) {
    if (Math.random() < 0.1) map[y][x] = new ExtraBomb();
    else map[y][x] = new TmpFire();
  } else if (!map[y][x].isUnbreakable()) {
    if (
      map[y][x].isBomb() ||
      map[y][x].isBombClose() ||
      map[y][x].isBombReallyClose()
    )
      bombs++;
    map[y][x] = new TmpFire();
  }
}

function move(x: number, y: number) {
  if (
    map[playery + y][playerx + x].isAir() ||
    map[playery + y][playerx + x].isFire()
  ) {
    playery += y;
    playerx += x;
  } else if (map[playery + y][playerx + x].isExtraBomb()) {
    playery += y;
    playerx += x;
    bombs++;
    map[playery][playerx] = new Air();
  }
}

function placeBomb() {
  if (bombs > 0) {
    map[playery][playerx] = new Bomb();
    bombs--;
  }
}

function update() {
  handleInputs();
  updateGameover();
  // delayUpdate();
  if (--delay > 0) return;
  delay = DELAY;
  updateMap();
}

function handleInputs() {
  while (!gameOver && inputs.length > 0) {
    let input = inputs.pop();
    input.handle();
  }
}

function updateGameover() {
  if (
    map[playery][playerx].isFire() ||
    map[playery][playerx].isMonsterDown() ||
    map[playery][playerx].isMonsterUp() ||
    map[playery][playerx].isMonsterLeft() ||
    map[playery][playerx].isMonsterRight()
  )
    gameOver = true;
}

function delayUpdate() {
  if (--delay > 0) return;
  delay = DELAY;
}

function updateMap() {
  for (let y = 1; y < map.length; y++) {
    for (let x = 1; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
}

function updateTile(x: number, y: number) {
  if (map[y][x].isBomb()) {
    map[y][x] = new BombClose();
  } else if (map[y][x].isBombClose()) {
    map[y][x] = new BombReallyClose();
  } else if (map[y][x].isBombReallyClose()) {
    explodeFire(x + 0, y - 1);
    explodeTmpFire(x + 0, y + 1);
    explodeFire(x - 1, y + 0);
    explodeTmpFire(x + 1, y + 0);
    map[y][x] = new Fire();
    bombs++;
  } else if (map[y][x].isTmpFire()) {
    map[y][x] = new Fire();
  } else if (map[y][x].isFire()) {
    map[y][x] = new Air();
  } else if (map[y][x].isTmpMonsterDown()) {
    map[y][x] = new MonsterDown();
  } else if (map[y][x].isTmpMonsterRight()) {
    map[y][x] = new MonsterRight();
  } else if (map[y][x].isMonsterRight()) {
    if (map[y][x + 1].isAir()) {
      map[y][x] = new Air();
      map[y][x + 1] = new TmpMonsterRight();
    } else {
      map[y][x] = new MonsterDown();
    }
  } else if (map[y][x].isMonsterDown()) {
    if (map[y + 1][x].isAir()) {
      map[y][x] = new Air();
      map[y + 1][x] = new TmpMonsterDown();
    } else {
      map[y][x] = new MonsterLeft();
    }
  } else if (map[y][x].isMonsterLeft()) {
    if (map[y][x - 1].isAir()) {
      map[y][x] = new Air();
      map[y][x - 1] = new MonsterLeft();
    } else {
      map[y][x] = new MonsterUp();
    }
  } else if (map[y][x].isMonsterUp()) {
    if (map[y - 1][x].isAir()) {
      map[y][x] = new Air();
      map[y - 1][x] = new MonsterUp();
    } else {
      map[y][x] = new MonsterRight();
    }
  }
}

function draw() {
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

function createGraphics() {
  let canvas = <HTMLCanvasElement>document.getElementById("GameCanvas");
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(g, x, y);
      if (!map[y][x].isAir())
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function colorOfTile(g: CanvasRenderingContext2D, x: number, y: number) {
  if (map[y][x].isUnbreakable()) g.fillStyle = "#999999";
      else if (map[y][x].isStone()) g.fillStyle = "#0000cc";
      else if (map[y][x].isExtraBomb()) g.fillStyle = "#00cc00";
      else if (map[y][x].isFire()) g.fillStyle = "#ffcc00";
      else if (
        map[y][x].isMonsterUp() ||
        map[y][x].isMonsterLeft() ||
        map[y][x].isMonsterRight() ||
        map[y][x].isMonsterDown()
      )
        g.fillStyle = "#cc00cc";
      else if (map[y][x].isBomb()) g.fillStyle = "#770000";
      else if (map[y][x].isBombClose()) g.fillStyle = "#cc0000";
      else if (map[y][x].isBombReallyClose()) g.fillStyle = "#ff0000";
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#00ff00";
  if (!gameOver)
    g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
};

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", (e) => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
  else if (e.key === " ") inputs.push(new Place());
});
