let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p"); // this is the part of the code that makes it so that every time I click the plus button, a paragraph tag is created underneath, which will be used to type a string value
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value; // this is the part of the code that inputs whatever value you type into the paragraph tag which will be put underneath after you click the plus button
  toDoContainer.appendChild(paragraph);
  inputField.value = ""; // this is the part of the code that replaces the value with an empty string after pressing the plus button
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through"; // this the part of the code that crosses out whatever you added as a "to-do" when you click on it
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph); // this the part of the code that removes whatever you added as a "to-do" when you double click on it
  });
});
