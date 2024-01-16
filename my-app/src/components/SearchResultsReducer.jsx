import { createReducer, combineReducers } from 'redux';

const searchResultsReducer = createReducer({}, (state, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS_SUCCESS':
      return { results: action.results };

    case 'SEARCH_RESULTS_FAILURE':
      return { error: action.error };

    default:
      return state;
  }
});

const searchReducer = createReducer((state, action) => {
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return () => {};

    case 'SEARCH_SUCCESS':
      return { results: action.results };

    case 'SEARCH_FAILURE':
      return { error: action.error };

    default:
      return state;
  }
});

const appReducer = combineReducers({
  searchResults: searchResultsReducer,
  search: searchReducer,
});

export default appReducer;


  