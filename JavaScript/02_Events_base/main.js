const block2 = document.getElementById("second");

block2.addEventListener("click", (event) => {
    console.log("Event from JS!");
});

const outerBlock = document.getElementById("outer");
const innerBlock = document.getElementById("inner");

outerBlock.addEventListener("mouseenter", () => {
    console.log("Outer block mouse enter event!");
})
outerBlock.addEventListener("mouseover", () => {
    console.log("Outer block mouse over event!");
})


innerBlock.addEventListener("mouseenter", () => {
    console.log("Inner block mouse enter event!");
})
innerBlock.addEventListener("mouseover", () => {
    console.log("Inner block mouse over event!");
})