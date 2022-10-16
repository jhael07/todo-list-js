const input = document.querySelector("input");
const addTask = document.querySelector(".addTask");
let btnRemove;

document.addEventListener("click", function (e) {
  e.preventDefault();
});

input.addEventListener("keydown", (e) => {
  const tarea = document.createElement("div");
  const t = document.createElement("div");
  btnRemove = document.createElement("button");
  btnRemove.insertAdjacentHTML("afterbegin", `✕`);
  btnRemove.classList.add("removeMssg");
  tarea.classList.add("tarea");

  const container = document.querySelector(".container");
  if (e.key === "Enter" && input.value != "") {
    tarea.insertAdjacentHTML(
      "afterbegin",
      `<div class="content">
    <p class="task">${input.value}</p>
  </div>
  `
    );

    t.insertAdjacentElement("beforebegin", tarea);
    tarea.appendChild(btnRemove);
    container.appendChild(tarea);

    input.value = "";

    btnRemove.addEventListener("click", () => {
      tarea.classList.add("d-none");
    });
  }
});

addTask.addEventListener("click", () => {
  const tarea = document.createElement("div");
  const t = document.createElement("div");
  btnRemove = document.createElement("button");
  btnRemove.insertAdjacentHTML("afterbegin", `✕`);
  btnRemove.classList.add("removeMssg");
  tarea.classList.add("tarea");

  const container = document.querySelector(".container");
  if (input.value != "") {
    tarea.insertAdjacentHTML(
      "afterbegin",
      `<div class="content">
      <p class="task">${input.value}</p>
    </div>
    `
    );

    t.insertAdjacentElement("beforebegin", tarea);
    tarea.appendChild(btnRemove);
    container.appendChild(tarea);

    input.value = "";

    btnRemove.addEventListener("click", () => {
      tarea.classList.add("d-none");
    });
  }
});
