document.addEventListener("DOMContentLoaded", setBorderColorAsync);
const divList = document.querySelectorAll("div");

function setBorderColorAsync(element, color, callback) {
  return new Promise((resolve, reject) => {
    if (element && element instanceof HTMLElement) {
      // sprawdzam czy parametr jest elementem DOM, więcej:
      // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

      if (callback && typeof callback === "function")
        resolve(
          setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            callback();
          }, Math.random() * 3000)
        );
      else reject("Parametr ~callback~ musi być funkcją");
    } else reject("Paremetr ~element~ musi być prawidłowym elementem DOM");
  });
}

setBorderColorAsync().then(
  setBorderColorAsync(divList[0], "red", () => {
    setBorderColorAsync(divList[1], "blue", () => {
      setBorderColorAsync(divList[2], "green", () => {});
    });
  })
);
