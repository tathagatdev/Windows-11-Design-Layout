let taskbar=document.getElementsByClassName("taskbar")[0]  /*For obtanimg only first child*/
let startmenu=document.getElementsByClassName("startmenu")[0]
taskbar.addEventListener("click",() =>{
    console.log("Clicked");

    if(startmenu.style.bottom=="50px"){
        startmenu.style.bottom="-655px"
    }
    else{
        startmenu.style.bottom="50px";
    }
})
