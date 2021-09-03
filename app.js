function updateProductNumber(product, price, isIncreasion){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasion == true) {
        productNumber = parseInt(productNumber) + 1;
    } 
    else if(productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculateTotal update
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
getInputValue();
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax =subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    
}
//  handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone',1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false)
});


//  handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',59, true);
    
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',59, false);
});

// function updateCaseNumber(isIncreasion){
//     const caseInput = document.getElementById('cade-number');
//     let caseNumber = caseInput.value;
//     if (isIncreasion == true) {
//         caseNumber = parseInt(caseNumber) + 1;
//     } 
//     else if(caseNumber > 0) {
//         caseNumber = parseInt(caseNumber) - 1;
//     }
//     caseInput.value = caseNumber;
//     // update case total
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseNumber * 59;
// };


// document.getElementById('case-plus').addEventListener('click', function(){
//     updateCaseNumber(true);
    
// });
// document.getElementById('case-minus').addEventListener('click', function(){
//     updateCaseNumber(false);
// });