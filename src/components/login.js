import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
        <form onSubmit={(event) => handleLogin(username, password, event)}>
            <div className="row">
                <div className="col">
                    <input className="form-control" name="username" maxLength="16" placeholder="Username" onChange={({target}) => setUsername(target.value)}/>
                </div>
                <div className="col">
                    <input className="form-control" name="password" maxLength="32" placeholder="Password" type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" value="Submit">Login</button>          </div>
        </form>
    </div>
    )
}

export default Login