// var sixBtns = document.querySelectorAll(".fix-num");

var randomNumbers = document.querySelectorAll(".btn")

var btn1 = document.querySelector(".fix-num1");
var btn2 = document.querySelector(".fix-num2");
var btn3 = document.querySelector(".fix-num3");
var btn4 = document.querySelector(".fix-num4");
var btn5 = document.querySelector(".fix-num5");
var btn6 = document.querySelector(".fix-num6");

// btn1.innerHTML = parseInt(Math.random()*37)
// btn2.innerHTML = parseInt(Math.random()*37)
// btn3.innerHTML = parseInt(Math.random()*37)
// btn4.innerHTML = parseInt(Math.random()*37)
// btn5.innerHTML = parseInt(Math.random()*37)
// btn6.innerHTML = parseInt(Math.random()*37)
btn1.innerHTML = 36;
btn2.innerHTML = 17;
btn3.innerHTML = 24;
btn4.innerHTML = 19;
btn5.innerHTML = 31;
btn6.innerHTML = 10;



function play(){
    for( y of randomNumbers){
    y.innerHTML = parseInt(Math.random()*37)
    if(y.innerHTML == btn1.innerHTML || y.innerHTML == btn2.innerHTML || y.innerHTML == btn3.innerHTML 
        || y.innerHTML == btn4.innerHTML || y.innerHTML == btn5.innerHTML || y.innerHTML == btn6.innerHTML){
        console.log("kakhi");
        y.style.backgroundColor = "green";
        y.style.color = "white";
    }
}}

// for(var x of randomNumbers){
   

//     x.addEventListener("click", function(){
//         this.innerHTML = parseInt(Math.random()*37);
//         if(this.innerHTML == btn1.innerHTML || this.innerHTML == btn2.innerHTML || this.innerHTML == btn3.innerHTML 
//             || this.innerHTML == btn4.innerHTML || this.innerHTML == btn5.innerHTML || this.innerHTML == btn6.innerHTML){
//             console.log("kakhi");
//             this.style.backgroundColor = "green";
//             this.style.color = "white"
//         }

//     })
// }

// for(var i of sixBtns){
// i.addEventListener("click", function(){
//     this.innerHTML = parseInt(Math.random()*37);
// })
// }
