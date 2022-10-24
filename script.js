window.onload =function (){
    let x = document.getElementById("form-container")

    let handledangnhap =function(){
        if(x.style.display =="none")
        x.style.display ="block"
        else 
        x.style.display ="none"
    }
    let button =document.getElementById("dangnhap")
    
    button.addEventListener("click",handledangnhap)
    

}

