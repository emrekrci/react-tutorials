import UserItem from "./UserItem.js"

const UserList = props => {

    const deleteUserFromList = (id) => {
        props.deleteUser(id);
    }
    
    return (
        <ul>
            {props.userList.map((item) => (
                <UserItem user={item} key={item.id} onDelete={deleteUserFromList}/>
            ))}  
        </ul>
    )
}

export default UserList;