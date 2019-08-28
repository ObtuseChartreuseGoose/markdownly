import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkdown } from '../selectors/markdownSelectors';
import { updateMarkdown } from '../actions/markdownActions';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  addMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);
