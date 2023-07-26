var burgerMenu = document.querySelector(".burger-menu");
var Menu = document.querySelector(".Menu");
burgerMenu.addEventListener("click", ()=>{
    if(Menu.className == "Menu Block"){
        var stringHidden = Menu.className.replace("Block", "Hidden");
        Menu.className = stringHidden
    } else {
        var stringBlock = Menu.className.replace("Hidden", "Block");
        Menu.className = stringBlock
    }
})