import { UPDATE_MARKDOWN, updateMarkdown } from './markdownActions';

describe('markdownActions', () => {
  it('creates an UPDATE_MARKDOWN action', () => {
    const action = updateMarkdown('my title');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'my title'
    });
  });
});
