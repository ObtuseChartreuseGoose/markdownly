import reducer from './currentMarkdownIdReducer';
import { updateCurrentMarkdownId } from '../actions/currentMarkdownIdActions';

describe('currentMarkdownIdReducer', () => {
  it('returns the same state when it does not understand the action', () => {
    const state = '12345';
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('returns the updated state when it calls the update action', () => {
    const state = '12345';
    const action = updateCurrentMarkdownId('hi');
    console.log('action', action);

    const newState = reducer(state, action);
    console.log(newState);

    expect(newState).toEqual('hi');
  });
});

