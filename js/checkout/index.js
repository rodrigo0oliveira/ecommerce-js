import { getSubTotal } from "../cart/index.js";
import Utils from "../utils/index.js";
const subTotalSpan = document.getElementById("subtotal");
const searchCepBtn = document.getElementById("search-cep");
const finalizeBuyBtn = document.getElementById("finalize");


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
        console.log(data);
        insertDataIntoForm(data);

        return data;

    } catch (error) {
        console.error(error.message);
    }
}

async function insertDataIntoForm(data) {
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    city.value = data.localidade;
    street.value = data.logradouro;
    state.value = data.estado;    
}

function cepIsValid(cep){
    const formatedCep = maskCep(cep);
    if(formatedCep.length!=9){
    Utils.showMessage("O número do CEP precisa ter 8 números e estar formatado (55790-000 ou 55790000)", "error");
    }
    return true;
}

function maskCep(cep){
    return cep.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

function calculateTotalSummary(region){
    const tax = region === "Sudeste" ? 0.0 : 20.00;
    const totalBuy =  getSubTotal() + tax;

    document.getElementById("tax").textContent = Utils.formatMoney(tax);
    document.getElementById("total").textContent = Utils.formatMoney(totalBuy);
}

document.addEventListener("DOMContentLoaded",()=>{
    searchCepBtn.addEventListener("click",async ()=>{
        const cep = document.getElementById("cep").value;
        if(cepIsValid(cep)){
            const data = await fetchCepValues(cep);
            calculateTotalSummary(data.regiao);
        }
    });

    finalizeBuyBtn.addEventListener("click",()=>{
        const loggedUser = localStorage.getItem("loggedUser");
        if (!loggedUser) {
            Utils.showMessage("Faça Login para continuar!", "error");
            setTimeout(() => {
                window.location.href = "../html/login.html";
            }, 1000);
            return;
        }

        localStorage.removeItem("cart");
        Utils.showMessage("Compra finalizada com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "../html/home.html";
        }, 1000);
    });

    renderSubTotal();
});