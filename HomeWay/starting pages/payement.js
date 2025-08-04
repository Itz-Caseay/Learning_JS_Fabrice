document.addEventListener("DOMContentLoaded",function(){
    let timeleft=600;
    const timerElement=document.getElementById("timer");
    const paybutton=document.getElementById("pay-button");
    const exitbutton=document.getElementById("exit-button");
    const ussdcode=document.getElementById("ussd-code");
    const orangebtn=document.getElementById("orange-btn");
    const mtnbtn=document.getElementById("mtn-btn");
    const numero=document.getElementById("numero")
    const ussdcodes={
        orange:"#150*1*692817835*38000#",
        mtn:"*126*14*675716545*38000"
    };
    function updateUSSD(operator){
        if(operator==="orange"){
            ussdcode.value=ussdcodes.orange;
            numero.value="+237 692817835"

            orangebtn.classList.add("active");
            orangebtn.classList.remove("inactive");
            mtnbtn.classList.remove("active");
            mtnbtn.classList.add("inactive");
        }
        else{
            ussdcode.value=ussdcodes.mtn;
            numero.value="+237 675716545"
            mtnbtn.classList.add("active");
            mtnbtn.classList.remove("inactive");
            orangebtn.classList.remove("active");
            orangebtn.classList.add("inactive");
        }
    }
    orangebtn.addEventListener("click",function(){
        updateUSSD("orange");
    });
    mtnbtn.addEventListener("click",function(){
        updateUSSD("mtn");
    });

    function copyText(id){
        const input=document.getElementById(id);
        input.Select();
        input.setSelectionRange(0,999999);
        document.execCommand("copy");
        alert("copied : " + input.value)
        
    }
    function updatetimer(){
        let minutes=Math.floor(timeleft/60);
        let seconds=timeleft%60;
        timerElement.textContent=`${minutes}:${seconds < 10 ? "0" : ""} ${seconds}`;
        if(timeleft===0){
            timerElement.textContent="temps ecoule";
            paybutton.classList.add("disabled");
            paybutton.disabled=true;
            setTimeout(()=>{
                window.location.href="./home-page.html";
            },5000);
        } else{
            timeleft--;
            paybutton.classList.add("abled");

            setTimeout(updatetimer,1000);
        }
    }
    updatetimer();
    exitbutton.addEventListener("click",function(){
        window.location.href="./home-page.html";
    });
})





