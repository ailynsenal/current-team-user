export default (state, action) => {
  switch(action.type) {
    case 'GET_USER_LIST':
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
        isError: false,
      }
      case 'GET_SEARCH_RESULT':
        return {
          ...state,
          searchResult: action.payload.searchResult,
          searchTerm: action.payload.search,
          isLoading: false,
          isError: false,
        }
    case 'ERROR':
      return {
        ...state,
        isError: action.payload
      }
    default:
      return state;
  }
}