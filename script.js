const forms = document.querySelectorAll('.requires-validation')
forms.forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }, false)
})

const today = new Date()
document.querySelector('#datepicker').setAttribute('max', today.toISOString().slice(0, 10))