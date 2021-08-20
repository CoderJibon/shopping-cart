
function productUpdate(product,price,productInt){
    const productField =  document.getElementById(product+'-quantity');
    const productValue = productField.value;
    let productNumber = parseInt(productValue);
    if(productInt == true){
        productNumber = productNumber + 1;
    }else{
        if(productNumber > 0){
            productNumber = productNumber - 1;
        }
    }
    productField.value = productNumber;
    const singleProductField = document.getElementById(product+'Price');
    singleProductField.innerText = productNumber * price;
    
    productCalculator();
}

function productUpdateInput(id){
   
    const productPriceField = document.getElementById(id+'Price');   
    const productPrice = parseFloat(productPriceField.innerText); 
    return productPrice;
}

function productCalculator(){
    
    const productPricePhone = productUpdateInput('phone');
    const productPriceCase  = productUpdateInput('case');
    const productTotal = productPricePhone + productPriceCase;

    // update on the html
    document.getElementById('productTotalPrice').innerText = productTotal;
    const productTextField = document.getElementById('productText').innerText = productTotal / 10;
    document.getElementById('productTotal').innerText = productTotal + productTextField;

}
//phone
document.getElementById('phone-plas').addEventListener('click',function(){
    productUpdate('phone',1219,true);
});
document.getElementById('phone-minas').addEventListener('click',function(){
    
    productUpdate('phone',1219,false);
});

//case
document.getElementById('case-plas').addEventListener('click',function(){
    productUpdate('case',59,true);
});
document.getElementById('case-minas').addEventListener('click',function(){
    
    productUpdate('case',59,false);
});
