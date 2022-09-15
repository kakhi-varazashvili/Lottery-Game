var sixBtns = document.querySelectorAll(".fix-num");

var randomNumbers = document.querySelectorAll(".btn")


for(var x of randomNumbers){
    x.addEventListener("click", function(){
        this.innerHTML = parseInt(Math.random()*37);

    })
}

for(var i of sixBtns){
i.addEventListener("click", function(){
    this.innerHTML = parseInt(Math.random()*37);
})
}
