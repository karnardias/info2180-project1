/* Add your JavaScript to this file */


document.addEventListener("DOMContentLoaded",function(){
    const form =document.querySelector('form');
    const msg = document.querySelector('.message');
    const einput = document.getElementById('email');


    form.addEventListener ('submit',function(event){
        event.preventDefault();
        const email = einput.value.trim();
        
        if (email !==''){
            msg.textContent = `Thank you! Your email address ${email} has been added to our mailing list!` ;
            einput.value = '';
        }else{
            msg.textContent = 'Please enter a valid email address.';
    }
});
});