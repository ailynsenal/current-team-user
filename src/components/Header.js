import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
  const { userList, searchTerm, getSearchResult} = useContext(GlobalContext);

  const handleSearch = (e) => {
    let search = e.target.value;

    const searchResult = userList.filter(user => {
      let { name, email} = user;
      return name.indexOf(search) > -1|| email.indexOf(search) > -1;
    });

    getSearchResult({
      searchResult,
      search
    });
  }

  return (
    <div className="header-container">
      <h2>Current Team User</h2>  
      <input type="text" 
          id="search" 
          placeholder="Search for name or email.." 
          title="Type in a name or email"
          value={searchTerm}
          onChange={handleSearch}
          autoComplete="off"
          tabIndex="0"/>
    </div>
  )
}