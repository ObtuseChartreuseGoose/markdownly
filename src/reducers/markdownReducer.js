import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  'Default': {
    title: 'TITLE',
    markdown: 'Hi'
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN: {
      // filter through array to match id
      
      return action.payload;

    }
    default:
      return state;
  }
};
