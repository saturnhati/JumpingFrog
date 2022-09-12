function jump(){
    document.getElementById("frog").classList.add("frogjump")
    document.getElementById("shadow").classList.add("shadow")
    setTimeout("removeClass()", 1500)
}

function shrink(){
    document.getElementById("btn").classList.add("shrink")
    setTimeout("removeClass()", 1500)
}

function removeClass(){
    document.getElementById("frog").classList.remove("frogjump")
    document.getElementById("shadow").classList.remove("shadow")
    document.getElementById("btn").classList.remove("shrink")
}
