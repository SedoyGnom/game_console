// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(trackAsArg) {
    // Тут всё рисуем.
    console.clear();
    console.log(trackAsArg.join(""));
    console.log("\n\n");
    // console.log(`Created by SedoyGnom with love`);
  }
}

module.exports = View;
