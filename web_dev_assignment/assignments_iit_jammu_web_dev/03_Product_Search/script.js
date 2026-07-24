
const products = [
  "Laptop",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Headphones",
  "Speaker",
  "Mobile",
  "Tablet",
  "Camera",
  "Printer"
];


const searchInput = document.getElementById("search");
const productList = document.getElementById("productList");


function displayProducts(items) {

    
    productList.innerHTML = "";

    
    if (items.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No products found.";
        productList.appendChild(li);
        return;
    }

    
    items.forEach((product) => {

        const li = document.createElement("li");
        li.textContent = product;

        productList.appendChild(li);

    });
}


displayProducts(products);


searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {

        return product.toLowerCase().includes(searchText);

    });

    displayProducts(filteredProducts);

});
