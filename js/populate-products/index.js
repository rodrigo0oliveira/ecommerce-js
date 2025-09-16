const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-product-img");
const modalName = document.getElementById("modal-product-name");
const modalPrice = document.getElementById("modal-product-price");
const modalDescription = document.getElementById("modal-product-description");
const closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const popularProducts = [
    {
        name: "Running canvas", price: "2999.00", img: "../assets/images/shoes/canva-shoes.png",description: "Tênis leve em lona para corridas casuais. Fabricado em lona respirável."

    },
    {
        name: "Running casual", price: "3999.00", img: "../assets/images/shoes/casual.png",description: "Modelo confortável para uso diário e corridas leves. Fabricado em tecido sintético com palmilha macia."

    },
    {
        name: "Casual Nile", price: "3999.00", img: "../assets/images/shoes/nike.png",description: "Tênis estiloso, ideal para passeios urbanos. Fabricado em malha leve com detalhes em borracha."


    }

];

const allProducts = [...popularProducts];

allProducts.push(
    {
        name: "Running canvas",
        price: "2999.00",
        img: "../assets/images/shoes/canva-shoes.png",
        gender: "masculino",
        quantity: 10,
        description: "Versão clássica em lona com ótima respirabilidade. Fabricado em lona reforçada."
    },
    {
        name: "Running casual",
        price: "3999.00",
        img: "../assets/images/shoes/casual.png",
        gender: "masculino",
        quantity: 15,
        description: "Design moderno e amortecimento para caminhadas longas. Fabricado em tecido sintético e sola de borracha."
    },
    {
        name: "Casual Nile",
        price: "3999.00",
        img: "../assets/images/shoes/nike.png",
        gender: "feminino",
        quantity: 12,
        description: "Estilo esportivo e versátil para o dia a dia. Fabricado em malha respirável com acabamento em borracha."
    },
    {
        name: "Trail Runner",
        price: "4999.00",
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
        gender: "masculino",
        quantity: 8,
        description: "Ideal para trilhas, com solado aderente e resistente. Fabricado em couro sintético e sola tratorada de borracha."
    },
    {
        name: "Street Sneaker",
        price: "3499.00",
        img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        gender: "feminino",
        quantity: 20,
        description: "Tênis urbano confortável com design moderno. Fabricado em tecido leve e sola de borracha. "
    },
    {
        name: "Classic Leather",
        price: "4599.00",
        img: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
        gender: "masculino",
        quantity: 5,
        description: "Modelo clássico em couro, elegante e durável. Fabricado em couro legítimo e sola emborrachada."
    },
    {
        name: "Sporty Flex",
        price: "3799.00",
        img: "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg",
        gender: "masculino",
        quantity: 18,
        description: "Tênis esportivo com flexibilidade e conforto. Fabricado em tecido elástico e solado em EVA."
    },
    {
        name: "Urban Runner",
        price: "4299.00",
        img: "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg",
        gender: "feminino",
        quantity: 7,
        description: "Modelo urbano para treinos e estilo casual. Fabricado em Malha esportiva e sola antiderrapante."
    },
    {
        name: "Urban Runner",
        price: "4299.00",
        img: "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg",
        gender: "feminino",
        quantity: 9,
        description: "Versão atualizada do Urban Runner com mais durabilidade. Fabricado em Tecido sintético reforçado e sola de borracha."
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

    const btn = copy.querySelector("button");
    btn.addEventListener("click", () => {
        modalImg.src = product.img;
        modalName.textContent = product.name;
        modalPrice.textContent = "R$ " + product.price;
        modalDescription.textContent = product.description;
        modal.classList.remove("hidden");
    });

    allProductsContainer.appendChild(copy);

});