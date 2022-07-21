import React from './react'


function Login() {
    return (
        <form>
            <span> LOGIN</span>
            <div>
                <label htmlFor='Username'> UserName</label>
                <input type='text' name='Username' placeholder="Username" />

            </div>
            <dib>
                <label htmlFor='paswsword'> passwrod</label>
                <input type='Passwrod' name='Passwrod' placeholder="Passwrod" />
            </dib>
            <input type='submit' value='login' />
        </form>
    )
}


export default Login;