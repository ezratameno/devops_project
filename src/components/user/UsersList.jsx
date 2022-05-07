import React, { useState } from "react";
import AddNewUser from "./AddNewUser";
import Card from "../ui/Card";
import classes from "../user/UsersList.module.css"
function UsersList(props)
{   
    return <ul>
        {/* assuming we get a list of users */}
                {props.users.map(createUsersList)}
           </ul>
}

function createUsersList(user)
{
    return <Card className = {classes.users} key = {user.id}>
    <li >
        {user.userName} ({user.userAge}) years old
    </li>
    </Card>
}
export default UsersList;