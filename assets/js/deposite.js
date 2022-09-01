
document.getElementById('btn-deposite').addEventListener('click', function(){
    const newDepositeAmount = getInputValueById('deposite-field');

    const previousDepositeAmount = getElementTextById('deposite-amount');

    const totalAmount = previousDepositeAmount + newDepositeAmount;

    setTextElementValueById('deposite-amount', totalAmount);
    const previousBalanceTotal = getElementTextById('total-amount');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementValueById('total-amount', newBalanceTotal);

   
});


