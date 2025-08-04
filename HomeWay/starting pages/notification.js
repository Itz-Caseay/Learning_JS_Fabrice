document.addEventListener("DOMContentLoaded",function(){
    const modal=document.getElementById("notification");
    const closebtn=document.querySelector(".close-btn");
    modal.style.display="flex";
    closebtn.addEventListener("click",function(){
        modal.style.display="none";
    })
    window.addEventListener("click",function(event){
        if(event.target===modal){
            modal.style.display="none";
        }

    });
    
})