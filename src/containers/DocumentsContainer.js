import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkdown } from '../selectors/markdownSelectors';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

export default connect(mapStateToProps)(Document);
