import react from 'react'
const User = (props) => {
    console.log(props)//props.data.name
    return (
        <div>
            <h1>{props.data.name}</h1>
        </div>
    )
}

export default User;