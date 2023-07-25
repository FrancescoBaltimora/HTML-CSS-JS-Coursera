function showMenu(){
    var Menu = document.querySelector(".Menu");
    if(Menu.className == "Menu Block"){
        var stringHidden = Menu.className.replace("Block", "Hidden");
        Menu.className = stringHidden
    } else {
        var stringBlock = Menu.className.replace("Hidden", "Block");
        Menu.className = stringBlock
    }
}