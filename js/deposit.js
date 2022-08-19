// deposit ammount
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDepositField = document.getElementById('input-deposit');
    const getInputDepositAmountSting = inputDepositField.value ;
    const getInputDepositAmount = parseFloat(getInputDepositAmountSting);


    const previousDepositAmount = document.getElementById('deposit-amount');
    const previousDepositTotalString = previousDepositAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    const totatlDeposit = getInputDepositAmount + previousDepositTotal

    previousDepositAmount.innerText = totatlDeposit;

    inputDepositField.value = '';



    const previousTotal = document.getElementById('total-amount')
    const previousTotalString = previousTotal.innerText;
    const previousTotalAmout = parseFloat(previousTotalString);

    const totalAmount = previousTotalAmout + getInputDepositAmount;

    previousTotal.innerText = totalAmount;
});