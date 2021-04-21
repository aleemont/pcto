function apriCol(id, id_2){
    document.getElementById("mid-col").classList.add("d-none");
    document.getElementById(id).classList.add("d-sm-block,col-sm-12");
    document.getElementById(id).classList.remove("d-none");
    document.getElementById(id_2).style.width = "93%";
    document.getElementById(id_2).style.height = "80%";
    document.getElementById(id_2).style.position = "fixed";
    document.getElementById(id_2).style.left = "5%";
}
function chiudiCol(id, id_2){
    document.getElementById("mid-col").classList.remove("d-none");
    document.getElementById(id).classList.remove("d-sm-block,col-sm-12");
    document.getElementById(id).classList.add("d-none");
    document.getElementById(id_2).style.removeProperty("width");
    document.getElementById(id_2).style.removeProperty("height");
}
function apriSearch(){
    document.getElementById("sb-mobile").classList.remove("d-none");
    document.getElementById("sb-mobile").classList.add("d-block");
    document.getElementById("row-mid-col").classList.add("d-none");
}
function chiudiSearch(){
    document.getElementById("sb-mobile").classList.remove("d-block");
    document.getElementById("sb-mobile").classList.add("d-none");
    document.getElementById("navbar-button").classList.remove("d-none");
    document.getElementById("logo").classList.remove("d-none");
    document.getElementById("row-mid-col").classList.remove("d-none");
}
function like(id){
    if(document.getElementById(id).style.fill != 'rgba(255, 0, 0, 0.7)')
    {
        document.getElementById(id).style.fill = 'rgba(255, 0, 0, 0.7)';
        document.getElementById(id).style.stroke = 'rgba(255, 0, 0, 0.6)';
    }
    else {
        document.getElementById(id).style.fill = 'rgb(255, 255, 255)';
        document.getElementById(id).style.stroke = 'rgb(0, 0, 0, 0.6)';
    }
}

//likes
document.getElementById("like-click").onclick = function(){
    like("like");
}

document.getElementById("like-click2").onclick = function(){
    like("like2");
}

document.getElementById("like-click3").onclick = function(){
    like("like3");
}

document.getElementById("like-click4").onclick = function(){
    like("like4");
}
//dashboard
document.getElementById("dash").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block")){
        chiudiSearch();
    }

    if(document.getElementById("right-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("right-col", "chat-col");
    }
    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("not-col", "notifiche")
    }
    if(document.getElementById("left-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("left-col", "dash-col");
    }
    else {
        apriCol("left-col", "dash-col");
    }
}

document.getElementById("dash-close").onclick = function(){
    chiudiCol("right-col", "chat-col");
}
//chat
document.getElementById("chat").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block")){
        chiudiSearch();
    }
    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("not-col", "notifiche");
    }
    if(document.getElementById("left-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("left-col", "dash-col");
    }
    if(document.getElementById("right-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("right-col", "chat-col");

    }
    else {
        apriCol("right-col", "chat-col");
    }
}

document.getElementById("chat-close").onclick = function(){
    chiudiCol("right-col", "chat-col");
}

//searchbar
document.getElementById("search").onclick = function(){
    document.getElementById("navbar-button").classList.add("d-none");
    document.getElementById("logo").classList.add("d-none");
    if(document.getElementById("left-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("left-col", "dash-col");
    }
    if(document.getElementById("right-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("right-col", "chat-col");
    }

    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("not-col", "notifiche");
    }

    if(document.getElementById("sb-mobile").classList.contains("d-none"))
    {
        apriSearch();
    }else {
        chiudiSearch();
    }

}
//notifiche
document.getElementById("not").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block")){
        chiudiSearch();
    }
    if(document.getElementById("left-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("left-col", "dash-col");
    }
    if(document.getElementById("right-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("right-col", "chat-col");
    }
    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        chiudiCol("not-col", "notifiche");
    }
    else{
        apriCol("not-col", "notifiche")
    }
}

document.getElementById("not-close").onclick = function(){
    chiudiCol("not-col", "notifiche");
}