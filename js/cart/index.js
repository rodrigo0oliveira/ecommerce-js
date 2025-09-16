const CART_KEY = "CART_KEY";

const products = [];
function addProductToCart(product){

    if(productIsInCart(product.id)){
        
    }else{
        products.push({
            id:product.id,
            name:product.name,
            quantity:1,
            image:product.img,
            description:product.description
        });
    }
}

function productIsInCart(id){
    const product = products.find((product)=>{
        return product.id == id;
    });

    if(product){
        product.quantity++;
        return true;
    }

    return false;
}

export {addProductToCart};