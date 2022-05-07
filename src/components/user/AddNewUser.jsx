import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModel from "../ui/ErrorModel";
import classes from "../user/AddNewUser.module.css";

function AddNewUser(props)
{
    const[user,setUser] = useState({
        userName: "",
        userAge: ""
    });

    const [error,setError]= useState();

    function form_Submited(event)
    {
        event.preventDefault();
        //passing the values to the function on the app.js so they can be displayed on UsersList

        if(user.userName.trim().length === 0 || user.userAge.trim().length === 0)
        {
            return setError({
                title: "Invalid input",
                messege: "Please enter a valid name and age (Non-empty values)."
            });
        }  
        if(Number(user.userAge) < 1)
        {
            return setError({
                title: "Invalid age",
                messege: "Please enter a valid  age (greater than 0)."
            });
        }

        {props.onAddUser(user.userName,user.userAge)}

        setUser({
            userName:"",
            userAge: ""
        })
    }

    function user_Changed(event)
    {
        const { name, value } = event.target;
        setUser(prevValue => 
          {
            return {
              ...prevValue,
              [name]: value }
          }
        );
    }

    function errorReset()
    {
        setError(null);
    }
    //we have to define manually className because it's custom component
 return <div>
            {/* will only output if there is a error (conditinal) */}
            {error &&<ErrorModel title={error.title} messege= {error.messege} onConfirm= {errorReset}/>}
            <Card className = {classes.input}>
                <form onSubmit={form_Submited}>
                    <label htmlFor="userName"> Name</label>
                    <input name="userName" type="text" value = {user.userName} 
                    onChange = {user_Changed} autoComplete = "off"/>
                    <label htmlFor="userAge">Age(Year)</label>
                    <input name="userAge" type="Number" value = {user.userAge} 
                    onChange = {user_Changed} autoComplete = "off"/>
                    <Button
                    type = "text">Add User</Button>
                </form>
            </Card>
        </div>
      
}


export default AddNewUser;