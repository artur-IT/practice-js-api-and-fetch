document.addEventListener("DOMContentLoaded", init);
const url = "https://api.ipify.org?format=json";

function init() {
  document.querySelector("button").addEventListener("click", () => new MyIP().showIP());
}

class MyIP {
  constructor() {
    fetch(url)
      .then((ip) => ip.json())
      .then((ip) => this.showIP(ip.ip))
      .catch((err) => console.log("Uppps, something's wrong!", err));
  }

  showIP = (ip) => (document.body.querySelector("span").textContent = ip);
}
