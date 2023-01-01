const Hero = require('./game-models/Hero');
// const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const { runInteractiveConsole } = require('../src/keyboard')
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(trackLength) {
    this.trackLength = trackLength;
    this.hero = new Hero(); 
    // this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
  }

  play() {
    runInteractiveConsole()
    setInterval(() => {
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

module.exports = Game;
