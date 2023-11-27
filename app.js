
const porcentMarker = document.querySelectorAll('.internalMarker')
const cards = document.querySelectorAll('.cardContainer')
const imagens = document.querySelectorAll('[data-js="imagem"]')
const skillsContainer = document.querySelector('[data-js="skillsContainer"]')

const moveIcon = () => {
    imagens.forEach(image => {
        image.classList.add('finalPositionImg')
    })
}

const isOnScreen = (element) => {
    let rect = element.getBoundingClientRect()
    return rect.top > 0 && rect.bottom < window.innerHeight
}

const addAnimation = () => {
    if (isOnScreen(skillsContainer)) {
        moveIcon()
        createAnimation()
    }
}

const createAnimation = () => {
    const porcet = ['60%', '80%', '70%', '50%', '70%', '50%', '60%', '80%', '70%', "75%"]
    const from = { width: 0 }

    porcentMarker.forEach((item, index) => {
        const to = { width: `${porcet[index]}` }

        item.animate([from, to], {
            duration: 900,
            fill: 'forwards',
        })
    })
}

const removeParagraph = () => {
    const paragraphs = document.querySelectorAll('[data-js="paragraph"]')
    paragraphs.forEach(paragraph => {
        const isLessThan = window.innerWidth <= 752

        if (isLessThan) {
            paragraph.style.display = 'none'
            return
        }
           paragraph.style.display = 'block'
    })
}

window.addEventListener('resize', removeParagraph)
window.addEventListener('load', addAnimation)

removeParagraph()
