import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN: 
      return action.payload;
    default:
      return state;
  }
};
