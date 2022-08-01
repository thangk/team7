// import api from '../api/base'


// for spacing out the header in mobile screen
export const HeaderSpacer = () => <div className="header-spacer"></div>

export const noSpaces = (input: string) => input.replace(' ', '')


export const getInputType = (action: string, type: string, id: string, options: string[], actionArray: any) => {

    id = id.replace(' ', '');

    let defaultInput: string = '';

    let setter: (arg0: any) => void;

    for (const item of actionArray) {
        if (id === item.name) {
            setter = item.action
            defaultInput = (action === 'edit') ? item.default : ''
        }
    }

    if (type === 'number') {

        if (action === 'edit') {
            return (
                <input type='number' id={id} name={id} minLength={1} maxLength={10} onChange={(e) => setter(Number(e.target.value))} value={defaultInput} required />
            )
        }

        return (
            <input type='number' id={id} name={id} minLength={1} maxLength={10} onChange={(e) => setter(Number(e.target.value))} required />
        )
    }

    if (type === 'text') {

        if (action === 'edit') {
            return (
                <input type='text' id={id} name={id} minLength={2} maxLength={100} onChange={(e) => setter(e.target.value)} value={defaultInput} required />
            )
        }

        return (
            <input type='text' id={id} name={id} minLength={2} maxLength={100} onChange={(e) => setter(e.target.value)} required />
        )
    }

    if (type === 'password') {

        if (action === 'edit') {
            return (
                <input type='password' id={id} name={id} minLength={2} maxLength={16} onChange={(e) => setter(e.target.value)} value={defaultInput} required />
            )
        }

        return (
            <input type='password' id={id} name={id} minLength={2} maxLength={16} onChange={(e) => setter(e.target.value)} required />
        )
    }

    if (type === 'email') {

        if (action === 'edit') {
            return (
                <input type='email'  id={id} name={id} minLength={2} maxLength={30} pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' onChange={(e) => setter(e.target.value)} value={defaultInput} required />
            )
        }

        return (
            <input type='email'  id={id} name={id} minLength={2} maxLength={30} pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' onChange={(e) => setter(e.target.value)} required />
        )
    }

    if (type === 'select') {

        if (action === 'edit') {
            return (
                <select id={id} name={id} onChange={(e) => setter(e.target.value)} value={defaultInput}>
                {options.map(item => {

                    if (item === defaultInput) {
                        return (
                            <option className="capitalize" key={item}>{item}</option>    
                        )
                    }

                    return (
                        <option className="capitalize" key={item}>{item}</option>
                    )
                })}
                </select>
            )
        }

        return (
            <select id={id} name={id} onChange={(e) => setter(e.target.value)}>
                {options.map(item => {

                    if (item === defaultInput) {
                        return (
                            <option value={item} className="capitalize" key={item}>{item}</option>    
                        )
                    }

                    return (
                        <option value={item} className="capitalize" key={item}>{item}</option>
                    )
                })}
            </select>
        )
    }
}


// @ts-ignore
export const validateInput = (...inputs) => {

    const minCharName = 2
    const maxCharName = 25

    let password;

    const name_pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ig
    const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ig
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,24}$/ig

    const errorCodes: { errMessage: string, valid: string}[] = [];

    for (const input of inputs) {

        if (input.type === 'firstname') {

            if (input.value.legnth < minCharName || input.value.legnth > minCharName) {
                errorCodes.push({
                    errMessage: 'Invalid first name length',
                    valid: `First name must be between ${minCharName} and ${maxCharName} characters.`
                })
            }

            if (!input.value.match(name_pattern)) {
                errorCodes.push({
                    errMessage: 'First name contains invalid characters.',
                    valid: `Only type in letters between a to z.`
                })
            }
        }

        if (input.type === 'lastname') {

            if (input.value.legnth < minCharName || input.value.legnth > minCharName) {
                errorCodes.push({
                    errMessage: 'Invalid last name length',
                    valid: `Last name must be between ${minCharName} and ${maxCharName} characters.`
                })
            }

            if (!input.value.match(name_pattern)) {
                errorCodes.push({
                    errMessage: 'Last name contains invalid characters.',
                    valid: `Only type in letters between a to z.`
                })
            }
        }

        if (input.type === 'email') {
            if (!input.value.match(email_pattern)) {
                errorCodes.push({
                    errMessage: 'Email is not valid.',
                    valid: ''
                })
            }
        }

        if (input.type === 'password') {
            password = input.value



            if (!input.value.match(password_pattern)) {
                errorCodes.push({
                    errMessage: 'Invalid password.',
                    valid: 'Password must be at between 8-24 characters. At least 1 uppercase, 1 lowercase, 1 digit and 1 speical character.'
                })
            }
        }

        if (input.type === 'confirmpassword') {
            if (!(input.value === password)) {
                errorCodes.push({
                    errMessage: 'The passwords do not match.',
                    valid: 'Make sure both of your passwords match.'
                })
            }
        }

        if (input.type === 'duplicatecheck') {
            if (input.value) {
                errorCodes.push({
                    errMessage: 'And account with this email address already exists.',
                    valid: 'Please choose another email.'
                })
            }
        }
    }

    return errorCodes
}


export const isDuplicateAccount = (email: string, usertype: any) => {

    for (const item of usertype) {
        if (item.email === email) {
            // console.log('found: ' + item.email)
            return true
        }
    }
    return false

}



