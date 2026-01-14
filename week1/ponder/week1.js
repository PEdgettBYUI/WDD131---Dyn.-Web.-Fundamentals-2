
const PI = 3.14;
let radius = 3;
                  
const one = 1;
const two = '2';
                    
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block



// TEST

console.log("✅ week1.js loaded");

// If you need to manipulate the DOM safely:
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM is ready");
  // Example: change the heading text to prove it’s working
  const h1 = document.querySelector("h1");
  if (h1) h1.textContent = "Week 1 (JS is working!)";
});
