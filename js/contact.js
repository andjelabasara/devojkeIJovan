//ovde smo odradili validacije

const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const messagesOne = document.getElementById('poruka');

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }


  if (email.value.length <= 6) {
    messages.push('Email must be longer than 6 characters')
  }

  if (email.value.length >= 20) {
    messages.push('Email must be less than 20 characters')
  }

  if (email.value === 'email') {
    messages.push('Email cannot be password')
  }

  if(messagesOne.value.length < 100){
    messages.push('Poruka je kraca od 100 karaktera')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})