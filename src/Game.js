const Hero = require("./game-models/Hero");
// const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const { runInteractiveConsole, keyboard } = require("../src/keyboard");
const View = require("./View");
const Controller = require("../src/keyboard");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(trackLength) {
    this.trackLength = trackLength;
    this.hero = new Hero();
    // this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.controller = new Controller(this.hero);
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
  }

  play() {
    this.controller.runInteractiveConsole();
    setInterval(() => {
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

module.exports = Game;
