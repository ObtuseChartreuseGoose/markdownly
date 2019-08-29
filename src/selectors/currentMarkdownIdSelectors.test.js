import { getCurrentMarkdownId } from './currentMarkdownIdSelectors';

describe('markdown Selectors', () => {
  it('gets currentMarkdownId from redux state', () => {
    const state = {
      currentMarkdownId: 'Default',
    };

    const id = getCurrentMarkdownId(state);
    expect(id).toEqual('Default');
  });
});
