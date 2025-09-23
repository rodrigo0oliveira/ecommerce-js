import { populateProductsWithFilterName,populateAllProductsContainer } from "../populate-products/index.js";
import { unselectBothButtons } from "./gender.js";
const inputFilterName = document.getElementById("product-name-filter");

inputFilterName.addEventListener("input",()=>{
    const typedValue = inputFilterName.value;
    if(typedValue){
        unselectBothButtons();
        populateProductsWithFilterName(typedValue);
    }else{
        populateAllProductsContainer();
    }
    
});