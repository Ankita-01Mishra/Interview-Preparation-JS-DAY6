function btnclick(){
    createDiv=document.getElementById('div1')
    createElement=document.createElement('h1')
    createDiv.appendChild(createElement)
    createElement.innerHTML='MERN STACK'

}

geth1=document.getElementsByTagName('h1')
console.log(geth1[0].innerHTML);
firsthi=geth1[0].innerHTML
document.getElementById('ans').innerHTML=firsthi


setInterval(()=>{
    let date=new Date()
    let hrs=date.getHours()
    let mins=date.getMinutes()
    let se=date.getSeconds()
    if(hrs>12){
        hrs=hrs-12;
        document.getElementById('ap').innerHTML='PM'
    }
    else{
        document.getElementById('ap').innerHTML='AM'
    }
    document.getElementById('hr').innerHTML=hrs
    document.getElementById('min').innerHTML=mins
    document.getElementById('sec').innerHTML=se
    
    },1000)
    

document.getElementById('btn2').addEventListener('click',()=>{
    if(document.getElementById('text1').innerHTML=='Hello World')
    document.getElementById('text1').innerHTML='Welcome to Elevation Academy'
    else
    document.getElementById('text1').innerHTML='Hello World'
})

document.getElementById('btn3').addEventListener('click',()=>{
    document.getElementById('text2').style.display="none"
})