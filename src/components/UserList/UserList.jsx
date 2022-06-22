import React from 'react'
import UserListItem from './UserListItem/UserListItem'


export default function UserList ({users}) {
  return(
    <div>
        {
        users && users.length > 0 ? users.map((user) =><UserListItem key={user.id} userinfo={user}/>):
        ( <div> 'No Result Component' </div>)
        }
    </div>
   )
}
