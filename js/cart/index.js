const CART_KEY = "CART_KEY";
const templateCartProduct = document.getElementById("cart-item");
const totalCartValue = document.getElementById("totalCartValue");


function getProducts() {
    return JSON.parse(localStorage.getItem(CART_KEY) || []);
}

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(products));
}

const products = getProducts();

function addProductToCart(product) {

    if (productIsInCart(product.id)) {

    } else {
        products.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.img,
            description: product.description
        });
    }
    saveCart();
}

function productIsInCart(id) {
    const product = products.find((product) => {
        return product.id == id;
    });

    if (product) {
        product.quantity++;
        return true;
    }

    return false;
}

const cartContainer = document.getElementById("cart-products");

function renderCart() {
    const productsInLocalStorage = getProducts();
    let sumTotal = 0;
    
    productsInLocalStorage.forEach(product => {
        const copy = templateCartProduct.content.cloneNode(true);
        copy.querySelector("#productImage").src = product.image;
        copy.querySelector("#productName").textContent = product.name;
        copy.querySelector("#productQuantity").textContent = product.quantity;
        copy.querySelector("#totalProducsPrice").textContent = `R$ ${product.quantity * product.price}`

        sumTotal+= product.quantity * product.price;

        cartContainer.append(copy);
    });

    totalCartValue.textContent = `Total R$${sumTotal.toFixed(2)}`;

}

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});




export { addProductToCart };