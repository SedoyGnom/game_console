// Наш герой.

const { keyboard } = require("../keyboard");

class Hero {
  constructor(position = 0) {
    this.skin = "🔥"; // можете использовать любые emoji '💃'
    this.position = position;
  }

  moveLeft() {
    // Идём влево.
    // keyboard.w()
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  moveDown() {
    this.position += 1;
  }

  moveUp() {
    this.position -= 1;
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
