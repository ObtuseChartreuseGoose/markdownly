import { connect } from 'react-redux';
import Tabs from '../../components/tab/Tabs';
import { updateCurrentMarkdownId } from '../../actions/currentMarkdownIdActions';
import { deleteMarkdownFile } from '../../actions/markdownActions';
import { getMarkdownFiles } from '../../selectors/markdownSelectors';
import { getCurrentMarkdownId } from '../../selectors/currentMarkdownIdSelectors';

const handleClickActionMap = {
  loadTab: updateCurrentMarkdownId,
  deleteTab: deleteMarkdownFile
};

const mapStateToProps = state => ({
  markdownFiles: getMarkdownFiles(state),
  currentMarkdownId: getCurrentMarkdownId(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick({ target }, id) {
    const action = handleClickActionMap[target.name](id);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
