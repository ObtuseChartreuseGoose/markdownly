import { UPDATE_MARKDOWN, updateMarkdown } from './markdownActions';

describe('markdownActions', () => {
  it('creates an UPDATE_MARKDOWN action', () => {
    const action = updateMarkdown('hi', 'Default');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: {
        markdown: 'hi',
        currentMarkdownId: 'Default'
      }
    });
  });
});
