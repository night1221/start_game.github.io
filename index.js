let verif = localStorage.getItem('name')
let name = document.getElementById('rrr')

window.onload = function(){
    if (verif == null){
        name.innerHTML
    } else{
        name.innerHTML = verif;
    }
}



let count = 0

function qwe(){
    document.getElementById("rd").innerHTML = "Cancel"
    document.getElementById("rd").style.background = "red"
    document.getElementById("rd").onclick = qwee;
    count += 1;
    function qwee(){
        document.getElementById("rd").innerHTML = "Ready"
        document.getElementById("rd").style.background = "green"
        count += 1;
        if(Number.isInteger(count/2) ){
            
            document.getElementById("rd").onclick = qwe;
        }else{
            document.getElementById("rd").onclick = qwe;
        }
    }
}

qwe()
