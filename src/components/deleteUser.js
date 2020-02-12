import React, { useState } from 'react'

const DeleteUser = ({handleDelete}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
        <form onSubmit={(event) => handleDelete(username, password, event)}>
            <div className="row">
                <div className="col">
                    <input className="form-control" name="username" maxLength="16" placeholder="Username" onChange={({target}) => setUsername(target.value)}/>
                </div>
                <div className="col">
                    <input className="form-control" name="password" maxLength="32" placeholder="Password" type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button name="delete-button" type="submit" className="btn btn-primary" value="Submit">Delete</button>          </div>
        </form>
    </div>
    )
}

export default DeleteUser