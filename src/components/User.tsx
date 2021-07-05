import React from 'react';
import ComponentInterface from '../interface/componentInterface';

interface userInterface {
  user: ComponentInterface,
  
}

export const User = ({ user } : userInterface) => {
  return (
    <div tabIndex={0} className="user-list-view">
      <span className="user-detail" tabIndex={-1}>{user.id}</span>
      <span className="user-detail" tabIndex={-1}>{user.name} </span>
      <span className="user-detail" tabIndex={-1}>{user.username}</span>
      <span className="user-detail" tabIndex={-1}><a href={`mailto:${user.email}`}>{user.email}</a></span>
      <span className="user-detail" tabIndex={-1}>{`${user.address.street}, ${user.address.city}`}</span>
      <span className="user-detail" tabIndex={-1}>{user.phone}</span>
      <span className="user-detail" tabIndex={-1}>{user.website}</span>
      <span className="user-detail" tabIndex={-1}>{user.company.name}</span>
    </div>
  )
}