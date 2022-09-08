/*  Name: Venne.Tanskanen
    Student id = 000536914
    Date: 9/9/2022
    Lecture 1 parts 1-5
 */
import "./styles.css";
if (document.readyState !== "loading") {
  initializedCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializedCode();
  });
}
function initializedCode() {
  console.log("Hello world!");

  const buttonClick = document.getElementById("my_button");
  buttonClick.addEventListener("click", function () {
    console.log("Hello world!");
    const nameChange = document.getElementById("h1_id");
    nameChange.innerText = "My notebook";
  });
  const buttonClick2 = document.getElementById("add-data");
  buttonClick2.addEventListener("click", function () {
    const listid = document.getElementById("data-list-id");
    let newItem = document.createElement("li");
    newItem.innerText = document.getElementById("textAreaId").value;
    listid.appendChild(newItem);
  });
}
