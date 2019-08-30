import { UPDATE_MARKDOWN, ADD_MARKDOWN_FILE, DELETE_MARKDOWN_FILE } from '../actions/markdownActions';

const initialState = {
  'Default': {
    title: 'TITLE',
    markdown: ''
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN: {
      const id = action.payload.currentMarkdownId;
      const markdown = action.payload.markdown;
      return { ...state, [id]: { ...state[id], markdown } };
    }
    case ADD_MARKDOWN_FILE: {
      const newId = action.payload;
      const title = 'New Tab';
      return { ...state,  [newId]: { title: title, markdown: '' } };
    }
    case DELETE_MARKDOWN_FILE: {
      const id = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};
