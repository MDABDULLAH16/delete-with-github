// console.log("js connected");
// /*1.first way to onclick work*/

// function makeGreen() {
//   document.body.style.backgroundColor = "green";
// }

// /*id diye function call */
// const makeRedColor = document.getElementById("make-red");
// makeRedColor.onclick = makeRed;

// function makeRed() {
//   document.body.style.backgroundColor = "red";
// }

// const makePurpleColor = document.getElementById("make-purple");
// makePurpleColor.onclick = function makePurple() {
//   document.body.style.backgroundColor = "purple";
// };
// document.getElementById("make-yellow").addEventListener("click", function () {
//   document.body.style.backgroundColor = "yellow";
// });

// //buttne handler function set kora,
// //comment box theke value collect kora,
// // commnet container dhore niye- creatae an element in comment container = p;
// //
// document.getElementById("btn-post").addEventListener("click", function () {
//   const commentBox = document.getElementById("comment-box");
//   const newComment = commentBox.value;
//   const commentContainer = document.getElementById("comment-container");
//   const p = document.createElement("p");
//   p.innerText = newComment;
//   commentContainer.appendChild(p);
// });

console.log("JS connected");

// Function to change the background color to green
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// Function to change the background color to red
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Function to change the background color to purple
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// Function to change the background color to yellow
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// Add click event listeners using querySelector
document.querySelector("#make-red").addEventListener("click", makeRed);
document.querySelector("#make-purple").addEventListener("click", makePurple);
document.querySelector("#make-yellow").addEventListener("click", makeYellow);

// Button click event to post a comment
document.querySelector("#btn-post").addEventListener("click", function () {
  const commentBox = document.querySelector("#comment-box");
  const newComment = commentBox.value;
  if (newComment.trim() !== "") {
    // Check if the comment is not empty
    const commentContainer = document.querySelector("#comment-container");
    const p = document.createElement("p");
    p.innerText = newComment;
    commentContainer.appendChild(p);
    commentBox.value = ""; // Clear the comment box
  }
});
