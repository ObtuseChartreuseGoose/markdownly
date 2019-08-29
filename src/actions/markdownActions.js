export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown, currentMarkdownId) => ({
  type: UPDATE_MARKDOWN,
  payload: {
    markdown,
    currentMarkdownId
  },
});





