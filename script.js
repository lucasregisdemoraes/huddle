document.querySelector("footer form").addEventListener('submit', e => {
    e.preventDefault()
})

const fields = document.querySelectorAll('[required]')

for (let field of fields) {
    field.addEventListener('invalid', e => {
        e.preventDefault()
        validateField(e)
    })

    field.addEventListener('blur', validateField)
}

function validateField(field) {
    field = field.target
    let error = verifyErrors()

    if (error) {
        field.classList.add('invalid')
        field.parentNode.querySelector('span.error').classList.add('show')
    } else {
        field.classList.remove('invalid')
        field.parentNode.querySelector('span.error').classList.remove('show')

    }

    function verifyErrors() {
        let foundError = false

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = true
            }
        }
        return foundError
    }
}