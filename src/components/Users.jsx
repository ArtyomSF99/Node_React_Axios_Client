import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const[users, setUsers] = useState([])
  
    
    async function getUsers() {
        const response = await axios.get(`http://localhost:8000/api/users`  );
        await setUsers(response.data)
    }
    useEffect(() => {
        getUsers()
    },[])
    return(
        <div>
            <button onClick={getUsers}>getUsers</button>
            <div>
            {users.map( user => 
              <div key={user.id}>
              {user.email
              ?<div className="mydiv">
                <div>{user.id}</div>
                <div>{user.email}</div>
               
                </div>
              :null}
                
                
              </div>
               
                
            )}
            </div>
            <Link to={`/Posts`} >
            <button className='myinput'>Посты</button>
           </Link>
        </div>
    )
}

export default Users;