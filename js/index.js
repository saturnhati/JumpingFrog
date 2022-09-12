let display = document.getElementById("display")
let counter = 0
let tired = document.getElementById("tired-frog")
display.innerHTML = `The frog jumped ${counter} times.`
let frogImg = document.getElementById("frog")
let frogIsDead = false
const TIREDNESSLEVELARR = [20, 30, 40, 50, 60, 70, 80, 90]
let tiredness;
let body = document.querySelector('body')
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let modal = document.getElementById("modal")

function randomizer(){
    tiredness = TIREDNESSLEVELARR[Math.floor(Math.random()*8)]
}
randomizer()
console.log(tiredness)

function jump(){
        document.getElementById('btn').disabled = true
        document.getElementById("frog").classList.add("frogjump")
        document.getElementById("shadow").classList.add("shadow")
        setTimeout("removeClass()", 1500)
        hopscount()
        schiatting()
        if(frogIsDead == true){
                 modal.classList.remove('invisible')
            }
        }

function shrink(){
    document.getElementById("btn").classList.add("shrink")
    setTimeout("removeClass()", 1500)
}

function removeClass(){
    document.getElementById("frog").classList.remove("frogjump")
    document.getElementById("shadow").classList.remove("shadow")
    document.getElementById("btn").classList.remove("shrink")
    if(frogIsDead == false){
        document.getElementById('btn').disabled = false
    }
}

function hopscount (){
    counter ++
    display.innerHTML = `The frog jumped ${counter} times.`
    if (counter == 1){
        tired.classList.remove('im-so-sad-im-so-very-very-sad')
        frogImg.src="./images/frog-cry.png"
    }
}

function schiatting (){
    if (counter == 2){
        frogIsDead = true
        tired.innerHTML = `The frog is dead.`
        tired.style.color = 'red'
        tired.style.fontWeight = 700

        frogImg.src="./images/frog-dead.png"
        document.getElementById('btn').disabled = true
    }
    else {
        console.log('hops')
    }
}

yes.addEventListener('click', function(){
    document.querySelector('h2').innerHTML = "I'm sorry for u..."
    document.getElementById('button-area').classList.add('invisible')
})

no.addEventListener('click', function(){
    body.classList.add('red') 
    modal.classList.add('invisible')
})