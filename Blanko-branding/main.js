document.getElementById(`img1`).addEventListener(`click`, function () {
    document.getElementById(`druk_main`).style.backgroundColor = `white`
    document.getElementById(`h1`).style.color = `black`
    document.getElementById(`h3`).style.color = `black`
    document.getElementById(`p`).style.color = `rgb(24, 24, 24)`
    document.getElementById(`p`).style.fontWeight = `550`
    document.getElementById(`img1`).style.border = `1px solid black`
    document.getElementById(`h2`).style.color = `black`
    let all = document.querySelectorAll(`*`)
    for (hammasiga of all) {
        hammasiga.style.transition = `all 0.2s linear`
    }
})

document.getElementById(`img2`).addEventListener(`click`, function () {
    document.getElementById(`druk_main`).style.backgroundColor = `black`
    document.getElementById(`h1`).style.color = `white`
    document.getElementById(`h3`).style.color = `white`
    document.getElementById(`p`).style.color = `#FFFFFFB2`
    document.getElementById(`p`).style.fontWeight = `400`
    document.getElementById(`img2`).style.border = `1px solid white`
    document.getElementById(`h2`).style.color = `white`
    let all = document.querySelectorAll(`*`)
    for (hammasiga of all) {
        hammasiga.style.transition = `all 0.2s linear`
    }
})