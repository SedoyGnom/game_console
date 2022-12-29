// Вместо keypress можно использовать и стандартный readline.

const keypress = require('keypress');


// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

export const keyboard = {
  w: () => console.log('w'),
  a: () => console.log('a'),
  s: () => console.log('s'),
  d: () => console.log('d'),
  space: () => console.log('space'),
};

// Какая-то функция.

export function runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}


