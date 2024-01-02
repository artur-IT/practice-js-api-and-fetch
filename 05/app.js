const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
}

function loadUsers() {
  const promise = fetchGet(apiUrl);

  promise
    .then((data) => insertUsers(data))
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function fetchGet(url) {
  return fetch(url).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(resp);
  });
}

function insertUsers(usersList) {
  const ulElement = document.querySelector(".users");
  ulElement.innerHTML = "";
  usersList.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${user.firstName} ${user.lastName}`;

    ulElement.appendChild(liElement);
  });
}

//---------

const firstName = document.querySelector(".form__field--first-name");
const lastName = document.querySelector(".form__field--last-name");
const submitBtn = document.querySelector(".form__submit");

let newUsers = {};
let first = (last = null);

firstName.addEventListener("change", (e) => (first = e.target.value));
lastName.addEventListener("change", (e) => (last = e.target.value));

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newUsers = { firstName: first, lastName: last };
  firstName.value = lastName.value = "";

  // WYŚLIJ USERA DO JSON
  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUsers),
  });

  loadUsers();
});
