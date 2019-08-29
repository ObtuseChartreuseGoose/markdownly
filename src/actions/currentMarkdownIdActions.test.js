import { UPDATE_CURRENT_MARKDOWN_ID, updateCurrentMarkdownId } from './currentMarkdownIdActions';

describe('currentMarkdownIdActions', () => {
  it('creates an UPDATE_CURRENT_MARKDOWN_ID action', () => {
    const action = updateCurrentMarkdownId('12345');

    expect(action).toEqual({
      type: UPDATE_CURRENT_MARKDOWN_ID,
      payload: '12345'
    });
  });
});
