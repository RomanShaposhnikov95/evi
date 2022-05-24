class FormValidator {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }
    initialize() {
        this.validateOnEntry()
        this.validateOnSubmit()
    }

    validateOnSubmit() {
        let self = this
        let data = {}

        this.form.addEventListener('submit', e => {
            e.preventDefault()
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                self.validateFields(input)
            })

            // const name = form.querySelector('[name="name"]');
            // data = {
            //     name: name.value,
            // }

        })
    }

    validateOnEntry() {
        let self = this
        this.fields.forEach(field => {
            if(!field) {
                return
            }
            const input = document.querySelector(`#${field}`)

            if(input) {
                input.addEventListener('input', event => {
                    self.validateFields(input)
                })
            }

        })
    }

    validateFields(field) {
        if(field === null) {
            return
        }
        // Check presence of values
        if (field.value.trim() === "") {
            this.setStatus(field, `Lauks nedrīkst būt tukšs.`, "error")
        } else {
            this.setStatus(field, null, "success")
        }

        // check for a valid email address
        if (field.type === "email") {
            const re = /\S+@\S+\.\S+/
            if (re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter valid email address", "error")
            }
        }

        if (field.id === "num") {
            const re = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/
            if (re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter valid phone number", "error")
            }
        }

        // Password confirmation edge case
        if (field.id === "password_confirmation") {
            const passwordField = this.form.querySelector('#password')

            if (field.value.trim() == "") {
                this.setStatus(field, "Password confirmation required", "error")
            } else if (field.value != passwordField.value)  {
                this.setStatus(field, "Password does not match", "error")
            } else {
                this.setStatus(field, null, "success")
            }
        }

        if (field.id === "check") {
            const check = this.form.querySelector('#check')
            if (!check.checked) {
                this.setStatus(field, "Jums ir jāapstiprina lietošanas noteikumi", "error")
            } else {
                this.setStatus(field, null, "success")
            }
        }

    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.error-message')

        if (status === "success") {
            if (errorMessage) { errorMessage.innerText = "" }
            field.classList.remove('input-error')
            if (field.id === "check") {
                field.nextElementSibling.classList.remove('input-error')
            }
        }

        if (status === "error") {
            field.parentElement.querySelector('.error-message').innerText = message
            field.classList.add('input-error')
            if (field.id === "check") {
                field.nextElementSibling.classList.add('input-error')
            }
        }
    }

    getData() {
        console.log('hello')
    }
}

const form = document.querySelector('.form-content')
const fields = ["username", `email`, "num", "surname", "password", "password_confirmation", "check"]

const validator = new FormValidator(form, fields)
validator.initialize()