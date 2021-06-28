import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  userList: [],
  searchResult: [],
  searchTerm: '',
  isLoading: true,
  isError: false,
}

// Create context
export const GlobalContext = createContext(initialState);

// Component Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const getUserList = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({
          type: 'GET_USER_LIST',
          payload: res.data
        })
      })
      .catch(() => {
        dispatch({
          type: 'ERROR',
          payload: true,
        })
      })
  }

  const getSearchResult = (result) => {
    dispatch({
      type: 'GET_SEARCH_RESULT',
      payload: result
    })
  }

  return (<GlobalContext.Provider value={{
    userList: state.userList,
    searchResult: state.searchResult,
    searchTerm: state.searchTerm,
    isLoading: state.isLoading,
    isError: state.isError,
    getUserList,
    getSearchResult
  }}>
    {children}
  </GlobalContext.Provider>);
}