import { CART_KEY, getSubTotal } from "../cart/index.js";
import Utils from "../utils/index.js";
const subTotalSpan = document.getElementById("subtotal");
const searchCepBtn = document.getElementById("search-cep");
const finalizeBuyBtn = document.getElementById("finalize");
const purchaseModal = document.getElementById("purchase-modal");
const productList = document.getElementById("product-list");
const modalSubtotal = document.getElementById("modal-subtotal");
const modalTax = document.getElementById("modal-tax");
const modalTotal = document.getElementById("modal-total");
const closeModalBtn = document.getElementById("close-modal");

function renderSubTotal(){
    subTotalSpan.textContent = Utils.formatMoney(getSubTotal());
}

async function fetchCepValues(cep){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if(!response.ok){
            throw new Error("Erro ao buscar cep");
        }
        const data = await response.json();
        if(data.erro) throw new Error();
        insertDataIntoForm(data);

        return data;

    } catch (error) {
        Utils.showMessage("CEP não encontrado. Preencha manualmente","error")
    }
}

async function insertDataIntoForm(data) {
    const street = document.getElementById("street");
    const number = document.getElementById("number");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    number.value = "";
    city.value = data.localidade;
    street.value = data.logradouro || "";
    state.value = data.uf;
}

function cepIsValid(cep){
    const formatedCep = maskCep(cep);
    if(formatedCep.length!=9){
        Utils.showMessage("O número do CEP precisa ter 8 números e estar formatado (55790-000 ou 55790000)", "error");
        return false;
    }
    const numberInput = document.getElementById("number");
    console.log(numberInput);
    numberInput.focus();
    return true;
}

function maskCep(cep){
    return cep.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

function calculateTotalSummary(uf){
    const tax = uf === "SP" || uf === "RJ" || uf === "MG" || uf === "ES" ? 0.0 : 20.00;
    const totalBuy =  getSubTotal() + tax;

    document.getElementById("tax").textContent = Utils.formatMoney(tax);
    document.getElementById("total").textContent = Utils.formatMoney(totalBuy);
}

function formIsValid() {
    const inputs = document.querySelectorAll("#cep, #street, #number, #city, #state");

    let allComplete = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allComplete = false;
            input.classList.add("border-red-500");
        } else {
            input.classList.remove("border-red-500");
        }
    });

    if (!allComplete) {
        Utils.showMessage("Por favor preencha todos os campos!","error");
        return false;
    }

    return true;
}

function summary() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    productList.innerHTML = cart.map(item => `<li class="mb-2">${item.name} - ${item.quantity}x - ${Utils.formatMoney(item.price * item.quantity)}</li>`).join('');
    if (!cart.length) productList.innerHTML = '<li class="mb-2">Sem produtos</li>';

    modalSubtotal.textContent = subTotalSpan.textContent;
    modalTax.textContent = document.getElementById("tax").textContent;
    modalTotal.textContent = document.getElementById("total").textContent;
    purchaseModal.classList.remove("hidden");
}


document.addEventListener("DOMContentLoaded",()=>{
    searchCepBtn.addEventListener("click",async ()=>{
        const cep = document.getElementById("cep").value;
        if(cepIsValid(cep)){
            const data = await fetchCepValues(cep);
            calculateTotalSummary(data.uf);
        }
    });

    finalizeBuyBtn.addEventListener("click",()=>{
        if(!formIsValid()) return;
        const loggedUser = localStorage.getItem("loggedUser");
        console.log(loggedUser);
        if (!loggedUser) {
            Utils.showMessage("Faça Login para continuar!", "error");
            setTimeout(() => {
                window.location.href = "../html/login.html";
            }, 1000);
            return;
        }
        
        summary();
    });

    closeModalBtn.addEventListener("click", () => {
        purchaseModal.classList.add("hidden");
        localStorage.removeItem(CART_KEY);
        Utils.showMessage("Compra finalizada com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "../html/home.html";
        }, 1000);
    });

    renderSubTotal();
});