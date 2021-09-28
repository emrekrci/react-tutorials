import React from "react";
import { useState } from "react/cjs/react.development";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import addUserStyle from "./AddUser.module.css";

const AddUser = (props) => {
    const[error, setError] = useState( )
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onUsernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
      setError(null);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid input',
            message: 'Please enter a calid name and age (non-empty values)'
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: 'Invalid Age',
            message : 'Please enter a calid age (>0)'
        })
      return;
    }

    props.onAddUser(enteredName, enteredAge)

    setEnteredAge("");
    setEnteredName("");

   
  };

  return (
      <div>
      {error && <ErrorModal title = {error.title} message= {error.message} onConfirm={errorHandler}></ErrorModal>}
      <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredName}
          onChange={onUsernameChangeHandler}
          id="username"
          type="text"
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          onChange={onAgeChangeHandler}
          id="age"
          type="number"
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
