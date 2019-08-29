import { UPDATE_MARKDOWN } from '../actions/markdownActions';

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
    default:
      return state;
  }
};
