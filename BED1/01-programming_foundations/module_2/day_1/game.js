class Entity {
  constructor(name, startPos, speed) {
    this.name = name;
    this.startPos = startPos;
    this.speed = speed;
  }
  gravity() {
    if (notTouchFloor) {
      this.posY *= -9.81;
    }
  }
}

class Mob extends Entity {
  constructor(name, startPos, speed, drops) {
    super(name, startPos, speed);
    this.drops = drops;
  }
}

class Player extends Entity {
  constructor(name, startPos, speed) {
    super(name, startPos, speed);
  }
  controll(movment) {
    this.startPosX = this.startPosX + movementX * speed;
    this.startPosY = this.startPosY + movementY * speed;
  }
}