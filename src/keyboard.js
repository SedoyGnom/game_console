// Вместо keypress можно использовать и стандартный readline.

const keypress = require("keypress");
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

class Controller {
  constructor(hero) {
    this.keyboard = {
      d: () => hero.moveRight(),
    };
  }

  // Какая-то функция.

  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.keyboard) {
          this.keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

module.exports = Controller;
