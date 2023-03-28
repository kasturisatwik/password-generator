let caps = ['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','P','O','I','U','Y','T','R','E','W','Q']
let small = ['a','q','w','e','r','t','y','u','i','o','p','l','k','j','h','g','f','d','s','a','z','x','c','v','b','n','m']
let symbols = ['!','@','#','$','%','&','*','(',')','_','-']
let num = ['0','1','2','3','4','5','6','7','8','9']
let display = document.getElementById("dis")
let password = document.getElementById("btn")
let save = document.getElementById("sv")

function rand(p){
    let r = Math.floor(Math.random()*p.length)
    return r
}
// function r(){
    
//     let rt= Math.floor(Math.random()*)
// }
password.addEventListener('click',function f(){
    let s = ''
    for(let i=0;i<6;i+=1){
        s+=caps[rand(caps)]
        s+=small[rand(small)]
        s+=symbols[rand(symbols)]
        s+=num[rand(num)]
    }
    display.value = s
})
function cpy(){
    display.select();
    document.execCommand("Copy");
}
function clr(){
    display.value = ""
}
