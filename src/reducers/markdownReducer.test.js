import reducer from './markdownReducer';

describe('markdownReducer', () => {
  it('returns the same state when it does not understand the action', () => {
    const state = [{
      id: '12345',
      title: 'this title',
      markdown: 'blah'
    }];
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('returns new state', () => {
    const state = [{
      id: '12345',
      title: 'this title',
      markdown: 'blah'
    }];

    const action = {
      type: 'UPDATE_MARKDOWN',
      payload: 'blah'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual('blah');
  });
});
