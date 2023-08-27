import React from 'react'

const UserAuth = ({children}) => {

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    ){

    if(currentUser= !==null){
        return children;
    }else{
        Swal.fire({
            icon : 'error',
            title :'not allowed',
            text : 'Login First to access this page'
        });
        
    }

    return (
        <div>UserAuth</div>
    )
}

export default UserAuth;