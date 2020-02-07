import React, { useState } from 'react'

const Register = ({handleRegister}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    return (
        <div>
        <form onSubmit={(event) => handleRegister(username, password, confirmPassword, event)}>
            <div className="row">
                <div className="col">
                    <input className="form-control" name="username" maxLength="16" placeholder="Username" onChange={({target}) => setUsername(target.value)}/>
                </div>
                <div className="col">
                    <input className="form-control" name="password" maxLength="32" placeholder="Password" type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <div className="col">
                    <input className="form-control" name="confirm-password" maxLength="32" placeholder="Confirm password" type="password" onChange={({target}) => setConfirmPassword(target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" value="Submit">Register</button>          </div>
        </form>
    </div>
    )
}

export default Register