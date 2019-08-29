export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown, currentMarkdownId) => ({
  type: UPDATE_MARKDOWN,
  payload: {
    markdown,
    currentMarkdownId
  },
});

export const ADD_MARKDOWN_FILE = 'ADD_MARKDOWN_FILE';
export const addMarkdownFile = () => ({
  type: ADD_MARKDOWN_FILE,
  payload: '_' + Math.random().toString(36).substr(2, 9)
});
