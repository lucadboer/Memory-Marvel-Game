const input = document.querySelector('.login_input')
const button = document.querySelector('.login_btn')
const form = document.querySelector('.login')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', 'true')
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)
