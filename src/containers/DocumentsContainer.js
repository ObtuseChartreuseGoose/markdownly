import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkdown } from '../selectors/markdownSelectors';
import { updateMarkdown } from '../actions/markdownActions';
import { getCurrentMarkdownId } from '../selectors/currentMarkdownIdSelectors';

const mapStateToProps = state => ({
  markdown: getMarkdown(state),
  currentMarkdownId: getCurrentMarkdownId(state)
});

const mapDispatchToProps = dispatch => ({
  addMarkdown({ target }, currentMarkdownId) {
    dispatch(updateMarkdown(target.value, currentMarkdownId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);
