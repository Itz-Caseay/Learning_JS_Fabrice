document.addEventListener('DOMContentLoaded',function(){
    const amountButtons=document.querySelectorAll('.amount-btn');
    const rechargeAmountInput=document.getElementById('rechargeAmount');
    const confirmeButton=document.querySelector('.confirm-button');

    amountButtons.forEach(button=>{
        button.addEventListener('click',function(){
            rechargeAmountInput.value=this.textContent;
        });
    });
    confirmeButton.addEventListener('click',function(){
        const amount=rechargeAmountInput.value;
        const phone=document.getElementById('phoneNumber').value;
        alert(`Recharge Amount: ${amount},phone Number: ${phone}`);

    });
    const backbutton=document.querySelector('.back-button');
    backbutton.addEventListener('click',function(event){
        event.preventDefault();
        window.history.back();

        
    });
})