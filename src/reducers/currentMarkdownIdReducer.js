import { UPDATE_CURRENT_MARKDOWN_ID } from '../actions/currentMarkdownIdActions';
import { ADD_MARKDOWN_FILE, DELETE_MARKDOWN_FILE } from '../actions/markdownActions';

const initialState = 'Default';

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_MARKDOWN_ID:
      return action.payload;
    case ADD_MARKDOWN_FILE:
      return action.payload;
    case DELETE_MARKDOWN_FILE: {
      if(action.payload === state) {
        return 'Default';
      } else {
        return state;
      }
    } 
    default:
      return state;
  }
};
