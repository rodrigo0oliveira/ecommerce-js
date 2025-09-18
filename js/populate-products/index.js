import { addProductToCart } from "../cart/index.js";

const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-product-img");
const modalName = document.getElementById("modal-product-name");
const modalPrice = document.getElementById("modal-product-price");
const modalDescription = document.getElementById("modal-product-description");
const modalButton = document.getElementById("modal-addToCart");
const closeModalBtn = document.getElementById("close-modal");

const mostPopularContainer = document.getElementById("popular-products");
const allProductsContainer = document.getElementById("all-products");
const templateProduct = document.getElementById("template-product-card");

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});


const popularProducts = [
    {
        id: 1,
        name: "Running canvas",
        price: "2999.00",
        img: "../assets/images/shoes/canva-shoes.png",
        gender: "masculino",
        description: "Tênis leve em lona para corridas casuais. Fabricado em lona respirável."

    },
    {
        id: 2,
        name: "Running casual",
        price: "3999.00",
        img: "../assets/images/shoes/casual.png",
        gender: "masculino",
        description: "Modelo confortável para uso diário e corridas leves. Fabricado em tecido sintético com palmilha macia."

    },
    {
        id: 3,
        name: "Casual Nile",
        price: "3999.00",
        img: "../assets/images/shoes/nike.png",
        gender: "masculino",
        description: "Tênis estiloso, ideal para passeios urbanos. Fabricado em malha leve com detalhes em borracha."
    }

];

const allProducts = [...popularProducts];

allProducts.push(
    {
        id: 4,
        name: "Running canvas",
        price: "2999.00",
        img: "../assets/images/shoes/running-casual.png",
        gender: "feminino",
        quantity: 10,
        description: "Versão clássica em lona com ótima respirabilidade. Fabricado em lona reforçada."
    },
    {
        id: 5,
        name: "Running casual",
        price: "3999.00",
        img: "../assets/images/shoes/casual-masculino.png",
        gender: "masculino",
        quantity: 15,
        description: "Design moderno e amortecimento para caminhadas longas. Fabricado em tecido sintético e sola de borracha."
    },
    {
        id: 6,
        name: "Casual Nile",
        price: "3999.00",
        img: "../assets/images/shoes/casual-nile.png",
        gender: "feminino",
        quantity: 12,
        description: "Estilo esportivo e versátil para o dia a dia. Fabricado em malha respirável com acabamento em borracha."
    },
    {
        id: 7,
        name: "Trail Runner",
        price: "4999.00",
        img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
        gender: "masculino",
        quantity: 8,
        description: "Ideal para trilhas, com solado aderente e resistente. Fabricado em couro sintético e sola tratorada de borracha."
    },
    {
        id: 8,
        name: "Street Sneaker",
        price: "3499.00",
        img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        gender: "feminino",
        quantity: 20,
        description: "Tênis urbano confortável com design moderno. Fabricado em tecido leve e sola de borracha. "
    },
    {
        id: 9,
        name: "Classic Leather",
        price: "4599.00",
        img: "../assets/images/shoes/ClassicLeather.png",
        gender: "masculino",
        quantity: 5,
        description: "Modelo clássico em couro, elegante e durável. Fabricado em couro legítimo e sola emborrachada."
    },
    {
        id: 10,
        name: "Sporty Flex",
        price: "3799.00",
        img: "../assets/images/shoes/SportyFlex.png",
        gender: "masculino",
        quantity: 18,
        description: "Tênis esportivo com flexibilidade e conforto. Fabricado em tecido elástico e solado em EVA."
    },
    {
        id: 11,
        name: "Urban Runner",
        price: "4299.00",
        img: "../assets/images/shoes/UrbanRunner (2).png",
        gender: "feminino",
        quantity: 7,
        description: "Modelo urbano para treinos e estilo casual. Fabricado em Malha esportiva e sola antiderrapante."
    },
    {
        id: 12,
        name: "Urban Runner",
        price: "4299.00",
        img: "../assets/images/shoes/urban-runner.png",
        gender: "feminino",
        quantity: 9,
        description: "Versão atualizada do Urban Runner com mais durabilidade. Fabricado em Tecido sintético reforçado e sola de borracha."
    }
);

function cloneProduct(product) {
    const copy = templateProduct.content.cloneNode(true);
    copy.querySelector("h3").textContent = product.name;
    copy.querySelector("img").src = product.img;
    copy.querySelector("p").textContent = product.price;

    return copy;
}

function cloneModal(copy, product) {
    const btn = copy.querySelector("button#view-product");
    btn.addEventListener("click", () => {
        modalImg.src = product.img;
        modalName.textContent = product.name;
        modalPrice.textContent = "R$ " + product.price;
        modalDescription.textContent = product.description;
        modal.classList.remove("hidden");
        modalButton.addEventListener("click",()=>{
            addProductToCart(product);
        })
    });
}

function cloneAddCart(copy, product) {
    const btn = copy.querySelector("button#addCart");
    btn.addEventListener("click", () => {
        addProductToCart(product);
    });
}

function cleanAllProductsContainer() {
    allProductsContainer.innerHTML = "";
}

function populateAllProductsContainer() {
    cleanAllProductsContainer();
    allProducts.forEach((product) => {
        let copy = cloneProduct(product);

        cloneModal(copy, product);
        cloneAddCart(copy, product);

        allProductsContainer.appendChild(copy);

    });
}

function populatePopularProducts() {
    popularProducts.forEach((product) => {
        let copy = cloneProduct(product);

        cloneModal(copy, product);
        cloneAddCart(copy, product);

        mostPopularContainer.appendChild(copy);
    });
}

function populateProductsWithGenderFilter(gender) {
    cleanAllProductsContainer();
    allProducts.forEach((product) => {
        if (product.gender === gender) {
            let copy = cloneProduct(product);

            cloneModal(copy, product);
            cloneAddCart(copy, product);

            allProductsContainer.appendChild(copy);
        }
    })
}

populatePopularProducts();
populateAllProductsContainer();

export {
    cleanAllProductsContainer,
    populateAllProductsContainer,
    populateProductsWithGenderFilter
}