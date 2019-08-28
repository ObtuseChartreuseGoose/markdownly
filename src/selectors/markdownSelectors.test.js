import { getMarkdown } from './markdownSelectors';

describe('markdown Selectors', () => {
  it('gets markdown from redux state', () => {
    const state = {
      markdown: 'hi'
    };

    const markdown = getMarkdown(state);
    expect(markdown).toEqual('hi');
  });
});
