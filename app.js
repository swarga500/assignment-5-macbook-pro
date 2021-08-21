
function getText(inputId){
    const input = document.getElementById(inputId);
        const inputText = parseFloat(total.innerText);


}


function getInput(product,previousPrice,price){
    document.getElementById(product).addEventListener('click', function(){
        
        const exCost = document.getElementById(previousPrice);
        const newcost = exCost.innerText;
        exCost.innerText = price;
        const total = document.getElementById('total-cost');
        const totalText = total.innerText;
        const memoryEx = document.getElementById('ex-memory-cost');
        const exMwmoryText = memoryEx.innerText;
        const storageEx = document.getElementById('ex-storage-cost');
        const exStorageText = storageEx.innerText;
        const deliveyEx = document.getElementById('ex-delivery-cost');
        const exDeliveryText = deliveyEx.innerText;
        totalAmount = parseFloat(exDeliveryText) + parseFloat(exStorageText) + parseFloat(exMwmoryText) + 1299;
        
        
        const promoTotal = document.getElementById('promo-total');
        let promoTotalText = promoTotal.innerText;
        promoTotal.innerText = totalAmount;
        total.innerText = totalAmount;
        return totalAmount;
        
    })
}
// function getInput(product,previousPrice,price){
//     document.getElementById(product).addEventListener('click', function(){
//         const exCost = document.getElementById(previousPrice);
//         const newcost = exCost.innerText;
//         exCost.innerText = price;
//         return price;
//     })
// }


// memory button 
const memory8gbCost = getInput('8gb-memory', 'ex-memory-cost', 0);
const memory16gbCost = getInput('16gb-memory', 'ex-memory-cost', 180);
const totalCost = document.getElementById('total-cost');

// Storage button 
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
        let promoInputText = promoInput.value;
        const total = document.getElementById('total-cost');
        const totalText = parseFloat(total.innerText);
        const promoTotal = document.getElementById('promo-total');
        let promoTotalText = promoTotal.innerText;
        const promo = totalText - totalText * 0.2;
        promoTotal.innerText = promo;
    }
})






