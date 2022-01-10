import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../Graphql/Mutation";
import '../App.css';

function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [createUser, {error}] = useMutation(CREATE_USER);

    return (
        <div className="createUser">
            <form action="">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" onChange={(event) => {
                    setName(event.target.value)
                }}/>

                <label htmlFor="username">User name</label>
                <input type="text" id="username" name="username" placeholder="User name" onChange={(event) => {
                    setUserName(event.target.value)
                }}/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value)
                }}/>
                <input type="submit" value="Submit" onClick={() => createUser({
                    variables: {name: name, username: username, password: password},
                })}/>
            </form>
        </div>
    );
}

export default CreateUser