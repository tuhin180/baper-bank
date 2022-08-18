document.getElementById('btn-submit').addEventListener('click',function(){
    const emailfiled = document.getElementById('user-email')
    const email = emailfiled.value;
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;

    if(email === 'santan@bap.com' && password === 'secretpass'){
        window.location.href = 'bank.html'
    }
    else{
        alert('toke ami teijjo korlam .tui password vule gacho.')
    }

})