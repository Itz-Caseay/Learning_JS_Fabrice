function saveData(){
    let bank=document.getElementById("bank").Value;
    let holder=document.getElementById("holder").value;
    let account=document.getElementById("account").value;
    if(holder==="" || account===""){
        alert("veuillez remplir tous les champs.");
        return;
    }
    let details=`<p><strong>${bank}</strong><p><p>${holder}</p></p>${account}</p>`;
    document.getElementById("accountDetails").innerHTML=details;
    document.getElementById("page1").classList.add("hidden")
    document.getElementById("page2").classList.remove("hidden")
}
function goBack(){
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");
}
function deletedata(){
    document.getElementById("accountDetails").innerHTML="<p> Aucun Compte enregistre</p>";
    document.getElementById("bank").value="orange";
    document.getElementById("holder").value="";
    document.getElementById("account").value="";
    goBack();
}