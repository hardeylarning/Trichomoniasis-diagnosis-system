
function genderSelector(){
    let gender = document.genderHolder.gender.value;
    if(gender == "male"){
        window.location.href = "male.html";
    }
    else if(gender == "female"){
        window.location.href = "female.html";
    }
    else{
        alert('Nothing was Selected');
    }
}
//
function discharge(discharge, url){
   let dischargeHolder = document.getElementById(discharge);
    let checkHolder = document.querySelectorAll('input[type="checkbox"]:checked');
    if(dischargeHolder.checked){
        window.location.href = url;
    }
    else if((checkHolder.length>0) && !dischargeHolder.checked){
        window.location.href = "negative.html";
    }
    else{
        alert('Nothing was Selected');
    }
}

var myVar;

function loader(){
    myVar = setTimeout(showPage, 5000);
}

function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("process").style.display = "none";
    document.getElementById("wait").style.display = "block";
}