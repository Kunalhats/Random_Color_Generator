let h1=document.querySelector("h1")
let button=document.querySelector("button")
let div=document.querySelector("div")
let body=document.querySelector("body")


// Event to change color by clicking it
button.addEventListener('click',function(){
    let mixColor=colorChange();
    div.style.backgroundColor=mixColor
    h1.innerHTML=mixColor;
    let mixBody=colorBody();
    body.style.backgroundColor=mixBody;
})


// for Changing div color
function colorChange(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)

    let color=`rgb(${red},${green},${blue})`
    return color;
}

//for Changing body color
function colorBody(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)

    let color=`rgb(${red},${green},${blue})`
    return color;

}


