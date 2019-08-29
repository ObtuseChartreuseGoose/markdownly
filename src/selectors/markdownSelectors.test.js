import { getMarkdown } from './markdownSelectors';

describe('markdown Selectors', () => {
  it('gets markdown from redux state', () => {
    const state = {
      markdownFiles: {
        'Default': {
          title: '',
          markdown: 'hi',
        }
      },
      currentMarkdownId: 'Default'
    };

    const markdown = getMarkdown(state);
    expect(markdown).toEqual('hi');
  });
});
