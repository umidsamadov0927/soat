let a = document.getElementById("soat");
let b = 0
if (a) {
    setInterval(() => {
        a.style.transform = `rotate(${b}deg)`
        b += 30
    },1000)
}