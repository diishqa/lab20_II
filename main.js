console.log(document);
const title = document.getElementById("title");
const text = document.querySelector("title");
console.log(title);
console.log(text);
title.textContent = "DOM изменен через JS!";
title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";
text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Кнопка нажать!");
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";
});
