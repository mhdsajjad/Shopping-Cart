function updateProductNumber(product,price, isIncreasion) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    
    if (isIncreasion == true) {
        productNumber= parseInt(productNumber) + 1;
    } 
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total product price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculateTotal
    calculateTotal()
};

function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
  // phone plus button 

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});



//  phone-minus button
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});

//  case-plus button
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});


//  case-minus button
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
});




















