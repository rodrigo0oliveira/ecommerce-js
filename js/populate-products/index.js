const popularProducts = [
    {
        name: "Running canvas", price: "2999.00", img: "../assets/images/shoes/canva-shoes.png"
    },
    {
        name: "Running casual", price: "3999.00", img: "../assets/images/shoes/casual.png"
    },
    {
        name: "Casual Nile", price: "3999.00", img: "../assets/images/shoes/nike.png"
    }

];

const allProducts = [...popularProducts];

allProducts.push();// implementar depois mais produtos;


const mostPopularContainer = document.getElementById("popular-products");
const templateProduct = document.getElementById("template-product-card");

console.log(templateProduct);

popularProducts.forEach((product) => {
    const copy = templateProduct.content.cloneNode(true);
    copy.querySelector("h3").textContent = product.name;
    copy.querySelector("img").src = product.img;
    copy.querySelector("p").textContent = product.price;

    mostPopularContainer.appendChild(copy);
})