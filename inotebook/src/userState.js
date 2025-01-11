import React, {useState}from 'react'
import UserContext from './userContext'

const UserState = (props) => {
    const UsersIntial = []
      const [user, setUser] = useState(UsersIntial)
       // Get All Notes
       const getuser = async () => {
        //  (TODO: API Call )   
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":localStorage.getItem('token')
          }
         
        });
        const json = await response.json()
        console.log(json)
        setUser(json)
      }
    
  return (
    <UserContext.Provider value={{user, getuser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState
