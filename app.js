
function getText(inputId){
    const input = document.getElementById(inputId);
        const inputText = parseFloat(input.innerText);
        return inputText;
}

//  button click and get total function
function getInput(product,previousPrice,price){
    document.getElementById(product).addEventListener('click', function(){
        const exCost = document.getElementById(previousPrice);
        const newcost = exCost.innerText;
        exCost.innerText = price;
        const total = document.getElementById('total-cost');
        const totalText = total.innerText;

        // get extra cost price by call function 
        const exMemoryCost = getText('ex-memory-cost');
        const exStorageCost = getText('ex-storage-cost');
        const exDeliveryCost = getText('ex-delivery-cost');

        // total calculate
        totalAmount = exDeliveryCost + exStorageCost + exMemoryCost + 1299;
        total.innerText = totalAmount;

        // promo total calculate
        const promoTotal = document.getElementById('promo-total');
        let promoTotalText = promoTotal.innerText;
        promoTotal.innerText = totalAmount;
        
        return totalAmount;
    })
}


// memory button click 
const memory8gbCost = getInput('8gb-memory', 'ex-memory-cost', 0);
const memory16gbCost = getInput('16gb-memory', 'ex-memory-cost', 180);
const totalCost = document.getElementById('total-cost');

// Storage button click
const storage256 = getInput('storage-256gb', 'ex-storage-cost', 0);
const storage512 = getInput('storage-512gb', 'ex-storage-cost', 100);
const storage1tb = getInput('storage-1tb', 'ex-storage-cost', 180);
// delivery button 
const delivery1 = getInput('free-delivery', 'ex-delivery-cost', 0);
const delivery3 = getInput('cost-delivery', 'ex-delivery-cost', 20);

// promo 
document.getElementById('promo-apply').addEventListener('click', function(){
    if(promoInputText = 'stevekaku'){
        const promoInput = document.getElementById('promo-input');
        const promoInputText = promoInput.value;
        const totalText = getText('total-cost');
        const promoTotal = document.getElementById('promo-total');
        const promoTotalText = promoTotal.innerText;
        const promo = totalText - totalText * 0.2;
        promoTotal.innerText = promo;

       // clear input field 
        promoInput.value = '';
    }
});






