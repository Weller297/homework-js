
let text = document.querySelector('.information')



function aboba() {
    let first = Math.floor(Math.random() * 255)
    let two = Math.floor(Math.random() * 255)
    let three = Math.floor(Math.random() * 255)
    text.style.color = `rgb(${first},${two},${three})`
    if (text.innerHTML == 100) {
        text.innerHTML = `100LVL`
        return
    }
    text.innerHTML++
    setTimeout(aboba, 50)
}
setTimeout(aboba, 50)

