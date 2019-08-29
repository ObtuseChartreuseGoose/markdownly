import { combineReducers } from 'redux';
import markdownReducer from './markdownReducer';
import currentMarkdownIdReducer from '../reducers/currentMarkdownIdReducer';

export default combineReducers({
  markdownFiles: markdownReducer,
  currentMarkdownId: currentMarkdownIdReducer,
});
