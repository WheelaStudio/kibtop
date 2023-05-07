const convertFieldName = name => {
    switch (name) {
        case 'username':
            return 'email'
        case 'email':
            return 'email'

        case 'middle_name':
            return 'name'

        case 'upload_user':
            return 'file'

        case 'addres':
            return 'city'
        
        case 'password':
            return 'password1'

        default:
            return name
    }
}

const convertFieldError = message => {console.log(message);
    switch (message) {
        case 'custom user with this username already exists.':
            return 'email is registered'
        case 'custom user with this username already exists.':
                return 'email is registered'
        default:
            return null
    }
}








export const serializeRegistrationErrors = error => {
    console.log(error);
    if(!error || Object.keys(error) === 0) return {name: null, message: null}
    if(!'email' in error && !'username' in error) return {name: null, message: null}

    let name, message, deskStep, mobileStep

    name = 'email'
    message = 'email is registered'

    const firstStepFields = ['email', 'password1', 'password1']
    deskStep = firstStepFields.some(field => field === name) ? 1 : 2


    mobileStep = name === 'email' ? 1 : 5

    return {name, message, deskStep, mobileStep}
}

export const serializeLoginErrors = error => {
    if(!error || Object.keys(error) === 0) return {name: null, message: null}

    let name, message

    for (const key in error) {
        name = convertFieldName(key)
        message = convertFieldError(error[key][0])
    }

    return {name, message}
}


export const seriealizeErrors = (errors) => ({
    name: Object.keys(errors)[0],
    message: errors[Object.keys(errors)[0]]?.message
})
