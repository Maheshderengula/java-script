function changeColor1(){
    document.getElementById('btn1').style.backgroundColor="yellow"
}
function changeColor2(){
    document.getElementById('btn2').style.backgroundColor="green"
}

function changeColor3(){
    document.getElementById('btn3').style.backgroundColor="blue"
}

function changeColor4(){
    document.getElementById('btn4').style.backgroundColor="yellow"
}
function changeColor5(){
    document.getElementById('ip1').style.backgroundColor="green"
}
function changeCase(){
    let name=document.getElementById('ip2').value;  alert(typeof name)
    //document.getElementById('ip2').value="Rajni"
    document.getElementById('ip2').value=name.toUpperCase()
}