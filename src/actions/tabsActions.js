export const LOAD_TAB = 'LOAD_TAB';
export const loadTab = (markdown, currentMarkdownId) => ({
  type: LOAD_TAB,
  payload: {
    markdown,
    currentMarkdownId
  },
});
