import React, { useContext, useEffect} from 'react';
import { User } from './User';
import { GlobalContext }  from '../context/GlobalState';
import ComponentInterface from '../interface/componentInterface';

import { ImSpinner3 } from 'react-icons/im';

interface UserListInterface {
  userList: Array<ComponentInterface>,
  searchTerm: string,
  searchResult: Array<ComponentInterface>,
  isLoading: boolean,
  isError: boolean,

}

export const UserList = () => {
  const { userList, searchTerm, searchResult, getUserList, isLoading, isError } = useContext(GlobalContext);

  useEffect(() => {
    getUserList();
  }, [])

  const renderHeader = () => {
    return Object.keys(userList[0]).map(key => 
      <div id={key} className="header-key" key={key}>
        <label>{key.toUpperCase()}</label>
      </div>)
  }

  const renderRows = (lists: Array<ComponentInterface>) => {
    return lists.map(list => (<User key={list.id} user={list} />))
  }
  
  return (
    <div className="user-list-wrapper">
      <header className="user-list-header">
        <div className="header-wrapper">
        { userList.length > 0 && 
          renderHeader()
        }
        </div>
      </header>
      <div className="user-list-content">
          { isLoading && !isError && userList.length === 0 && searchResult.length === 0 &&
            <div className="loading">
              <ImSpinner3 size="2em" /> 
              <div>Loading...</div>
            </div>
          }

          { isLoading && !userList.length && isError &&
            <div className="empty-result">Failed to load the items!</div>
          }

          { userList.length > 0 && !searchTerm &&
            renderRows(userList)
          }

          { searchTerm && searchResult.length > 0 &&
            renderRows(searchResult)
          }

          { userList.length === 0 || searchTerm && searchResult.length === 0 &&
            <div className="empty-result">No record found!</div>
          }
      </div>
    </div>
  )
}