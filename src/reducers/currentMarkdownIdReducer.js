import { UPDATE_CURRENT_MARKDOWN_ID } from '../actions/currentMarkdownIdActions';

const initialState = 'Default';

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_MARKDOWN_ID:
      return action.payload;
    default:
      return state;
  }
};
