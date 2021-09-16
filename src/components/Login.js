import React from 'react'

export default function Login(props) {
    return (
        <div>
            <form>
                <input name="username" onChange={props.handleChange} placeholder="username"/>
                <input onChange={props.handlePasswordChange} type='password' name='password' placeholder="password"/>
                <button onClick={props.setUser}>Log in</button>
            </form>
        </div>
    )
}