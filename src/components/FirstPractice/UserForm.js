import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const UserForm = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const submitHandler = event => {
        event.preventDefault();

        const user = {
            username : enteredUsername,
            age : enteredAge,
            id: Math.random()
        }

        props.onAddUser(user);
    }

    const setUsernameHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const setAgeHandler = event => {
        setEnteredAge(event.target.value);
    }

    return(
        <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" onChange={setUsernameHandler}></input>
            <label>Age (Years)</label>
            <input type="text" onChange={setAgeHandler}></input>
            <button type="submit">Add User</button>
        </form>
    );
}

export default UserForm;