const p = document.querySelector("#dragID");
const div = document.querySelector(".dragDiv");

// fire when drag start
p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text", e.target.id);
});

// fire when drag over in the div
div.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// fire when drop element
div.addEventListener("drop", function (e) {
  const id = e.dataTransfer.getData("text");
  const textData = document.getElementById(id);
  div.appendChild(textData);
  e.preventDefault();
});

// How are you?