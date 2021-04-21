function apriColD(){
    document.getElementById("mid-col").classList.add("d-none");
    document.getElementById(id).classList.add("d-sm-block,col-sm-12");
    document.getElementById(id).classList.remove("d-none");
    document.getElementById(id_2).style.width = "93%";
    document.getElementById(id_2).style.height = "80%";
    document.getElementById(id_2).style.position = "fixed";
    document.getElementById(id_2).style.left = "5%";
}
function chiudiColD(){
    document.getElementById("middle-wrapper").classList.remove("d-none");
    document.getElementById("right-wrapper").classList.add("d-none");
    document.getElementById("header").classList.remove("d-none");
    document.getElementById("friends-col").classList.remove("d-none");
}
function apriSearch(){
    document.getElementById("sb-mobile").classList.remove("d-none");
    document.getElementById("sb-mobile").classList.add("d-block");
    document.getElementById("middle-wrapper").classList.add("d-none");
    document.getElementById("right-wrapper").classList.add("d-none");
    document.getElementById("header").classList.add("d-none");
}
function chiudiSearch(){
    document.getElementById("sb-mobile").classList.remove("d-block");
    document.getElementById("sb-mobile").classList.add("d-none");
    document.getElementById("navbar-button").classList.remove("d-none");
    document.getElementById("logo").classList.remove("d-none");
    document.getElementById("middle-wrapper").classList.remove("d-none");
    document.getElementById("right-wrapper").classList.remove("d-none");
    document.getElementById("header").classList.remove("d-none");
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

