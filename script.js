let num = 0 ;
document.querySelectorAll(".btn").forEach(function(item){item.addEventListener("click" , function(){
    if(item.classList.contains("add")){
     num++;
     document.querySelector("h1").innerHTML = num ;
    }else{
        num--;
        document.querySelector("h1").innerHTML = num ;
    }
    if(num > 0){
        document.querySelector("h1").style.color = "green";
    }else if(num < 0){
        document.querySelector("h1").style.color = "red";
    }
})})

