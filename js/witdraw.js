document.getElementById('btn-witdraw').addEventListener('click', function(){
     const inputWirdraw = document.getElementById('input-witdraw')
     const inputWithdrawString = inputWirdraw.value ;
     const inputWirdrawAmount = parseFloat(inputWithdrawString);

     const getWithdraw = document.getElementById('witdraw-amount');
     const takeWithdrawString = getWithdraw.innerText;
     const withdrawAmount = parseFloat(takeWithdrawString); 



     const previousTotal = document.getElementById('total-amount')
     const previousTotalString = previousTotal.innerText;
     const previousTotalAmout = parseFloat(previousTotalString);

     inputWirdraw.value = '';
     
     if(previousTotalAmout < inputWirdrawAmount){
        alert('baper bank e ato taka nai.')
        return;
     }

     const witdrawBalance = inputWirdrawAmount + withdrawAmount;
     getWithdraw.innerText = witdrawBalance;
     

     
     const totalAmount = previousTotalAmout - inputWirdrawAmount;
     previousTotal.innerText = totalAmount;

})  