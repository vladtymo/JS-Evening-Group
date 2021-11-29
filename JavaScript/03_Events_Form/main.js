const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");

let products = [];

saveBtn.addEventListener("click", (event) => {

    let product = {
        name: nameInput.value,
        price: priceInput.value,
        print() {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    };
    product.print();

    products.push(product);

    nameInput.value = "";
    priceInput.value = "";

    renderProduct(product);
});

function renderProduct(prod) {
    const list = document.getElementById("product-list");
    
    const li = document.createElement("li");
    li.setAttribute("class", "product");
    li.innerHTML = prod.name + " " + prod.price + "$";

    list.appendChild(li);
}