import Utils from "../utils/index.js";

const CART_KEY = "CART_KEY";
const SUBTOTAL_KEY = "SUBTOTAL_KEY";

const templateCartProduct = document.getElementById("cart-item");
const totalCartValue = document.getElementById("totalCartValue");
const cartContainer = document.getElementById("cart-products");


function getProducts() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(products));
}

const products = getProducts();

function addProductToCart(product) {

    if (!productIsInCart(product.id)) {
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
    Utils.showMessage("Produto adicionado ao carrinho!", "success");
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

function renderCart() {
    let sumTotal = 0;

    products.forEach(product => {
        const copy = templateCartProduct.content.cloneNode(true);
        copy.querySelector("#productImage").src = product.image;
        copy.querySelector("#productName").textContent = product.name;
        copy.querySelector("#productQuantity").textContent = product.quantity;
        copy.querySelector("#totalProducsPrice").textContent = Utils.formatMoney(product.price * product.quantity);
        copy.querySelector("#decreaseBtn").addEventListener("click", () => {
            decreaseQuantity(product);
        });
        copy.querySelector("#increaseBtn").addEventListener("click", () => {
            increaseQuantity(product);
        });
        copy.querySelector("#removeBtn").addEventListener("click",()=>{
            removeProduct(product.id);
        })

        sumTotal += product.quantity * product.price;

        cartContainer.append(copy);
    });

    const subTotal = `R$ ${sumTotal.toFixed(2)}`;
     
    totalCartValue.textContent = `Total ${subTotal}`;
    setSubTotal(sumTotal);

}

function setSubTotal(total) {
    localStorage.setItem(SUBTOTAL_KEY,total);
}

function getSubTotal(){
    return Number(localStorage.getItem(SUBTOTAL_KEY));
}

function decreaseQuantity(product) {
    if (product.quantity > 1) {
        product.quantity -= 1;
        updateCartUI();
    } else {
        removeProduct(product.id);
    }
}

function increaseQuantity(product) {
    product.quantity++;
    updateCartUI();
}

function removeProduct(id){
    const index = products.findIndex(p=> p.id === id);
    if(index != -1){
        products.splice(index,1);
    }
    updateCartUI();
}

function updateCartUI() {
    saveCart();
    cartContainer.innerHTML = "";
    renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    document.getElementById("goToCheckout").addEventListener("click",()=>{
        window.location.href = "../html/checkout.html";
    })
});


export { addProductToCart,getSubTotal };