function apriColD(id){
    document.getElementById("middle-wrapper").classList.add("d-none");
    document.getElementById("right-wrapper").classList.remove("d-none");
    document.getElementById("header").classList.add("d-none");
    document.getElementById(id).classList.add("d-none");
}
function chiudiColD(id){
    document.getElementById("middle-wrapper").classList.remove("d-none");
    document.getElementById("right-wrapper").classList.add("d-none");
    document.getElementById("header").classList.remove("d-none");
    document.getElementById(id).classList.remove("d-none");
}

function apriSearch(){
    document.getElementById("sb-mobile").classList.remove("d-none");
    document.getElementById("sb-mobile").classList.add("d-block");
    document.getElementById("middle-wrapper").classList.add("d-none");
    document.getElementById("right-wrapper").classList.add("d-none");
    document.getElementById("not-col").classList.remove("d-sm-block,col-sm-12");
    document.getElementById("not-col").classList.add("d-none");
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

document.getElementById("request-click").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block"))
    {
        chiudiSearch();
    }
    showed = false;
    if(!document.getElementById("friends-col").classList.contains("d-none")){
        document.getElementById("right-wrapper").classList.remove("d-none");
        document.getElementById("requests-col").classList.remove("d-none");
        document.getElementById("pc-col").classList.remove("d-none");
        document.getElementById("friends-col").classList.add("d-none");
        document.getElementById("middle-wrapper").classList.add("d-none");
        document.getElementById("header").classList.add("d-none");
        showed = true;
    }
    if(!showed)
    {
        if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
            document.getElementById("middle-wrapper").classList.remove("d-none");
            document.getElementById("header").classList.remove("d-none");
            document.getElementById("not-col").classList.remove("d-sm-block,col-sm-12");
            document.getElementById("not-col").classList.add("d-none");

            document.getElementById("right-wrapper").classList.remove("d-none");
            document.getElementById("requests-col").classList.remove("d-none");
            document.getElementById("pc-col").classList.remove("d-none");
            document.getElementById("friends-col").classList.add("d-none");
            document.getElementById("middle-wrapper").classList.add("d-none");
            document.getElementById("header").classList.add("d-none");
        }
        else
        {
            document.getElementById("right-wrapper").classList.add("d-none");
            document.getElementById("requests-col").classList.add("d-none");
            document.getElementById("pc-col").classList.add("d-none");
            document.getElementById("middle-wrapper").classList.remove("d-none");
            document.getElementById("header").classList.remove("d-none");
        }
    }
}

document.getElementById("chat").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block"))
    {
        chiudiSearch();
    }
    showed = false;
    if(!document.getElementById("requests-col").classList.contains("d-none")){
        document.getElementById("right-wrapper").classList.remove("d-none");
        document.getElementById("requests-col").classList.add("d-none");
        document.getElementById("pc-col").classList.add("d-none");
        document.getElementById("friends-col").classList.remove("d-none");
        document.getElementById("middle-wrapper").classList.add("d-none");
        document.getElementById("header").classList.add("d-none");
        showed = true;
    }
    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        document.getElementById("middle-wrapper").classList.remove("d-none");
        document.getElementById("header").classList.remove("d-none");
        document.getElementById("not-col").classList.remove("d-sm-block,col-sm-12");
        document.getElementById("not-col").classList.add("d-none");
    }
    if(!showed)
    {
        if(!document.getElementById("middle-wrapper").classList.contains("d-none"))
        {
            document.getElementById("right-wrapper").classList.remove("d-none");
            document.getElementById("requests-col").classList.add("d-none");
            document.getElementById("pc-col").classList.add("d-none");
            document.getElementById("friends-col").classList.remove("d-none");
            document.getElementById("middle-wrapper").classList.add("d-none");
            document.getElementById("header").classList.add("d-none");
        }
        else
        {
            document.getElementById("right-wrapper").classList.add("d-none");
            document.getElementById("friends-col").classList.add("d-none");
            document.getElementById("middle-wrapper").classList.remove("d-none");
            document.getElementById("header").classList.remove("d-none");
        }
    }
}

document.getElementById("search").onclick = function(){
    document.getElementById("navbar-button").classList.add("d-none");
    document.getElementById("logo").classList.add("d-none");
    if(document.getElementById("sb-mobile").classList.contains("d-none"))
    {
        apriSearch();
    }else {
        chiudiSearch();
    }
}

document.getElementById("not").onclick = function(){
    if(document.getElementById("sb-mobile").classList.contains("d-block")){
        chiudiSearch();
    }
    if(document.getElementById("not-col").classList.contains("d-sm-block,col-sm-12")){
        document.getElementById("middle-wrapper").classList.remove("d-none");
        document.getElementById("header").classList.remove("d-none");
        document.getElementById("not-col").classList.remove("d-sm-block,col-sm-12");
        document.getElementById("not-col").classList.add("d-none");
    }
    else{
        document.getElementById("middle-wrapper").classList.add("d-none");
        document.getElementById("header").classList.add("d-none");
        document.getElementById("not-col").classList.add("d-sm-block,col-sm-12");
        document.getElementById("not-col").classList.remove("d-none");
        document.getElementById("notifiche").style.width = "93%";
        document.getElementById("notifiche").style.height = "80%";
        document.getElementById("notifiche").style.position = "fixed";
        document.getElementById("notifiche").style.left = "4%";
    //}
    }
}

//likes
document.getElementById("like-click").onclick = function(){
    like("like");
}

document.getElementById("like-click2").onclick = function(){
    like("like2");
}

