document.addEventListener("DOMContentLoaded", init);

const divList = document.querySelectorAll("div");

function init() {
  return new Promise((resolve, reject) => {
    resolve("jest ok");
    reject("błąd");
  });
}

init()
  .then(setBorderColorAsync(divList[0], "red", function () {}))
  .then(setBorderColorAsync(divList[1], "blue", function () {}))
  .then(setBorderColorAsync(divList[2], "green", function () {}))
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
