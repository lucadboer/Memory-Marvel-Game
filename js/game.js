const grid = document.querySelector('.grid')

const characters = [
    'back-DrEstranho',
    'back-ferro',
    'back-miranha',
    'back-pantera',
    'back-viuva',
    'back-wanda',
    'back-gaviaoArqueiro',
    'back-thor',
    'back-capita',
    'back-capitao'
]

let firstCard = ''
let lastCard = ''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20) {
        window.alert('Parabéns, você ganhou o jogo!')
    }
}

const checkCard = () => {
    const firstCaracter = firstCard.getAttribute('data-character')
    const lastCaracter = lastCard.getAttribute('data-character')

    if (firstCaracter === lastCaracter) {

        firstCard.firstChild.classList.add('disabled-card')
        lastCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        lastCard = ''

        checkEndGame()
    }
    else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            lastCard.classList.remove('reveal-card')

            firstCard = ''
            lastCard = ''

        }, 500)
    }
}


const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element;
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode
    }
    else if (lastCard === '') {
        target.parentNode.classList.add('reveal-card');
        lastCard = target.parentNode
    }

    checkCard()

}

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../images/${character}.jpg)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)


    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5) 

    shuffledArray.forEach((character) => {

        const card = createCard(character)
        grid.appendChild(card)

    })
}

loadGame()

//https://www.youtube.com/watch?v=tcbMmm77WOU