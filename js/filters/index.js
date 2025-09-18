import { populateProductsWithGenderFilter,populateAllProductsContainer } from "../populate-products/index.js";

const buttonMan = document.getElementById("button-man");
const buttonWoman = document.getElementById("button-woman");

const selectButtons = {
    manButton:false,
    womanButton:false
}

buttonMan.addEventListener("click",()=>{
   if(!selectButtons.manButton){
    styleSelectButton(buttonMan,"man");
    populateProductsWithGenderFilter("masculino");
   }else{
    selectButtons.manButton = false;
    unSelectButton(buttonMan);
    populateAllProductsContainer();
   }
});

buttonWoman.addEventListener("click",()=>{
   if(!selectButtons.womanButton){
    styleSelectButton(buttonWoman,"woman");
    populateProductsWithGenderFilter("feminino");
   }else{
    selectButtons.womanButton = false;
    populateAllProductsContainer();
    unSelectButton(buttonWoman);
   }
});


function styleSelectButton(button,buttonName){
    button.style.backgroundColor = "black";
    button.style.color = "white";
    
    if(buttonName === "man"){
        selectButtons.manButton = true;
        selectButtons.womanButton = false;
        unSelectButton(buttonWoman);
    }
    else{
        selectButtons.womanButton = true;
        selectButtons.manButton = false;
        unSelectButton(buttonMan);
    }
}

function unSelectButton(button){
    button.style.backgroundColor = "white";
    button.style.color = "black";
}