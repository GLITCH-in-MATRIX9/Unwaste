// creating objects 
const products = [
    {  category: "stationary", name: "Book weight", price: 80.00, img: "/pictures/art/book weight 2.jpg" },
    {  category: "stationary", name: "Book weight", price: 50.00, img: "/pictures/art/book weights.jpg" },
    {  category: "accessories", name: "Broche", price: 60.00, img: "/pictures/art/broche.jpg" },
    {  category: "wall", name: "Wall Clock", price: 250.00, img: "/pictures/art/clock.jpeg" },
    {  category: "wall", name: "Home Decor", price: 260.00, img: "/pictures/art/decor 1.jpg" },
    {  category: "flooring", name: "Flooring", price: 600.00, img: "/pictures/art/flooring 1.jpg" },
    {  category: "flooring", name: "Flooring", price: 12000.00, img: "/pictures/art/flooring 2.jpg" },
    {  category: "flooring", name: "Flooring", price: 45000.00, img: "/pictures/art/flooring 3.jpg" },
    {  category: "flooring", name: "Flooring", price: 35000.00, img: "/pictures/art/flooring 4.jpg" },
    {  category: "flooring", name: "Flooring", price: 45000.00, img: "/pictures/art/flooring 5.jpg" },
    {  category: "wall", name: "Hanger", price: 100.00, img: "/pictures/art/hanger.jpg" },
    {  category: "accessories", name: "Pendant", price: 60.00, img: "/pictures/art/pendant.jpg" },
    {  category: "stationary", name: "Pens", price: 50.00, img: "/pictures/art/pens.webp" },
    {  category: "wall", name: "Shelf", price: 80.00, img: "/pictures/art/Resin Shelf-1.jpg" },
    {  category: "wall", name: "Shelf", price: 50.00, img: "/pictures/art/shelf.webp" },
    {  category: "tables", name: "Table", price: 750.00, img: "/pictures/art/table 2.jpg" },
    {  category: "tables", name: "Table", price: 1260.00, img: "/pictures/art/table 2.webp" },
    {  category: "tables", name: "Table", price: 650.00, img: "/pictures/art/table 3.jpg" },
    {  category: "tables", name: "Table", price: 2500.00, img: "/pictures/art/table.jpg" },
    {  category: "wall", name: "Wall", price: 50.00, img: "/pictures/art/wall hanging 1.jpg" },
    {  category: "wall", name: "Wall", price: 5000.00, img: "/pictures/art/wall.jpg" },

    {  category: "accessories", name: "Phone cover", price: 250.00, img: "/pictures/art/new (1).jpg" },
    {  category: "tables", name: "Table", price: 50000.00, img: "/pictures/art/new (2).jpg" },
    {  category: "accessories", name: "Phone cover", price: 250.00, img: "/pictures/art/new (3).jpg" },
    {  category: "accessories", name: "Comb with clips", price: 120.00, img: "/pictures/art/new (4).jpg" },
    {  category: "tables", name: "Tea Table", price: 2500.00, img: "/pictures/art/new (5).jpg" },
    {  category: "accessories", name: "Pendant", price: 50.00, img: "/pictures/art/new (6).jpg" },
    {  category: "wall", name: "Wall Clock", price: 210.00, img: "/pictures/art/new (7).jpg" },
    {  category: "tables", name: "Tea table", price: 1800.00, img: "/pictures/art/new (8).jpg" },
    {  category: "tables", name: "Custom chair", price: 250.00, img: "/pictures/art/new (9).jpg" },
    {  category: "tables", name: "Table", price: 650.00, img: "/pictures/art/new (10).jpg" },
    {  category: "tables", name: "Side Table", price: 280.00, img: "/pictures/art/new (11).jpg" },
    {  category: "wall", name: "Clock", price: 140.00, img: "/pictures/art/new (12).jpg" },
    {  category: "accessories", name: " Hair Clips", price: 20.00, img: "/pictures/art/new (13).jpg" },
    {  category: "wall", name: "Clock", price: 150.00, img: "/pictures/art/new (14).jpg" },
    {  category: "wall", name: "Decor piece", price: 230.00, img: "/pictures/art/new (15).jpg" },
    {  category: "accessories", name: "Pendant", price: 80.00, img: "/pictures/art/new (16).jpg" },
    {  category: "tables", name: "Side Table", price: 750.00, img: "/pictures/art/new (17).jpg" },
    {  category: "tables", name: "Dining Table", price: 850.00, img: "/pictures/art/new (18).jpg" },
    {  category: "accessories", name: "Pendant ", price: 45.00, img: "/pictures/art/new (19).jpg" },
    {  category: "accessories", name: "Earring", price: 50.00, img: "/pictures/art/new (20).jpg" },
    {  category: "accessories", name: "Pendant", price: 50.00, img: "/pictures/art/new (21).jpg" },
    {  category: "accessories", name: "Earring", price: 65.00, img: "/pictures/art/new (22).jpg" },
    {  category: "wall", name: "Clock", price: 250.00, img: "/pictures/art/new (23).jpg" },
    {  category: "accessories", name: "Buttons pendant", price: 50.00, img: "/pictures/art/new (24).jpg" },
    {  category: "accessories", name: "Phone Cover", price: 250.00, img: "/pictures/art/new (25).jpg" },
    {  category: "accessories", name: "Pendant", price: 65.00, img: "/pictures/art/new (26).jpg" },
    {  category: "accessories", name: "Phone Cover", price: 250.00, img: "/pictures/art/new (27).jpg" },
    {  category: "accessories", name: "Earrings", price: 55.00, img: "/pictures/art/new (28).jpg" },
    {  category: "accessories", name: "Phone cover", price: 150.00, img: "/pictures/art/new (29).jpg" },
    {  category: "tables", name: "Wood Table", price: 750.00, img: "/pictures/art/new (30).jpg" },

    {  category: "stationary", name: "Custom Notebook", price: 120.00, img: "/pictures/art/st (1).jpg" },
    {  category: "stationary", name: "Ball pens (6-set)", price: 80.00, img: "/pictures/art/st (2).jpg" },
    {  category: "stationary", name: "Pens and Bookmark", price: 50.00, img: "/pictures/art/st (3).jpg" },
    {  category: "stationary", name: "Mini notebook", price: 50.00, img: "/pictures/art/st (4).jpg" },
    {  category: "stationary", name: "Exam Board", price: 30.00, img: "/pictures/art/st (5).jpg" },
    {  category: "stationary", name: "Exam board", price: 30.00, img: "/pictures/art/st (6).jpg" },
    {  category: "stationary", name: "Pens and Bookmark", price: 40.00, img: "/pictures/art/st (7).jpg" },
    {  category: "stationary", name: "Exam Board", price: 40.00, img: "/pictures/art/st (8).jpg" },
    {  category: "stationary", name: "Book Set", price: 150.00, img: "/pictures/art/st (9).jpg" },
    {  category: "stationary", name: "Journals", price: 80.00, img: "/pictures/art/st (10).jpg" },
    {  category: "stationary", name: "Geometry", price: 90.00, img: "/pictures/art/st (11).jpg" },
    {  category: "stationary", name: "Notebook", price: 80.00, img: "/pictures/art/st (12).jpg" },
    {  category: "stationary", name: "Exam Board", price: 40.00, img: "/pictures/art/st (13).jpg" },


    




];

document.addEventListener("DOMContentLoaded", () => {
    // Initial product list
    displayProducts(products);

    // Add event listener for category filter
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filteredProducts = filterProducts(products, selectedCategory);
        displayProducts(filteredProducts);
    });
});


// Function to display products in the product container
function displayProducts(products) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img class="product" src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹ ${product.price.toFixed(1)}</p>
            <button class="cart-button">
            <img class="cart-icon" src="https://img.icons8.com/ios-glyphs/30/00000/shopping-cart--v1.png" alt="Cart Icon">
                        Add to Cart
            </button>
        `;
        productContainer.appendChild(productCard);
    });
}


// Function to filter products based on category
function filterProducts(products, category) {
    if (category === "all") {
        return products;
    } else {
        return products.filter(product => product.category === category);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize the shopping cart
    let shoppingCart = [];

    // Add event listener for "Add to Cart" buttons
    const productContainer = document.getElementById("productContainer");
    productContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("cart-button")) {
            const productId = event.target.dataset.productId;
            const selectedProduct = products.find(product => product.id === productId);
            addToCart(selectedProduct);
            updateCartIcon();
        }
    });

    // Function to add a product to the shopping cart
    function addToCart(product) {
        shoppingCart.push(product);
    }

    // Function to update the cart count in the HTML
    function updateCartIcon() {
        const cartCountElement = document.querySelector(".cart-count");
        cartCountElement.textContent = shoppingCart.length;
    }
});

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  