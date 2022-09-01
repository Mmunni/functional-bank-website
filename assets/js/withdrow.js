

document.getElementById('btn-withdrow').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('widthdrow-field');
    

    const previousWithdrawAmount = getElementTextById('withdrow-amount');

    const totalAmount = previousWithdrawAmount + newWithdrawAmount;

    setTextElementValueById('withdrow-amount', totalAmount);
    const previousBalanceTotal = getElementTextById('total-amount');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-amount', newBalanceTotal);

   
});