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

allProducts.push(
    {
        name: "Running canvas",
        price: "2999.00",
        img: "../assets/images/shoes/canva-shoes.png",
        gender: "masculino",
        quantity: 10
    },
    {
        name: "Running casual",
        price: "3999.00",
        img: "../assets/images/shoes/casual.png",
        gender: "masculino",
        quantity: 15
    },
    {
        name: "Casual Nile",
        price: "3999.00",
        img: "../assets/images/shoes/nike.png",
        gender: "feminino",
        quantity: 12
    },
    {
        name: "Trail Runner",
        price: "4999.00",
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
        gender: "masculino",
        quantity: 8
    },
    {
        name: "Street Sneaker",
        price: "3499.00",
        img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        gender: "feminino",
        quantity: 20
    },
    {
        name: "Classic Leather",
        price: "4599.00",
        img: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
        gender: "masculino",
        quantity: 5
    },
    {
        name: "Sporty Flex",
        price: "3799.00",
        img: "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg",
        gender: "masculino",
        quantity: 18
    },
    {
        name: "Urban Runner",
        price: "4299.00",
        img: "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg",
        gender: "feminino",
        quantity: 7
    },
    {
        name: "Urban Runner",
        price: "4299.00",
        img: "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg",
        gender: "feminino",
        quantity: 9
    }
);

const mostPopularContainer = document.getElementById("popular-products");
const allProductsContainer = document.getElementById("all-products");
const templateProduct = document.getElementById("template-product-card");


popularProducts.forEach((product) => {
    const copy = templateProduct.content.cloneNode(true);
    copy.querySelector("h3").textContent = product.name;
    copy.querySelector("img").src = product.img;
    copy.querySelector("p").textContent = product.price;

    mostPopularContainer.appendChild(copy);
});

allProducts.forEach((product)=>{
    const copy = templateProduct.content.cloneNode(true);
    copy.querySelector("h3").textContent = product.name;
    copy.querySelector("img").src = product.img;
    copy.querySelector("p").textContent = product.price;

    allProductsContainer.appendChild(copy);

});