
const UserItem = props => {

    const deleteUserHandler = () => {

        props.onDelete(props.user.id)
    }

    return(
        <li onClick={deleteUserHandler}>
            {props.user.username} ({props.user.age} years old)
        </li>
    )
}

export default UserItem;