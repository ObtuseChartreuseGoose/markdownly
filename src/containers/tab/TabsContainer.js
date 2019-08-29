import { connect } from 'react-redux';
import Tabs from '../../components/tab/Tabs';
import { updateCurrentMarkdownId } from '../../actions/currentMarkdownIdActions';
import { getMarkdownFiles } from '../../selectors/markdownSelectors';

const handleClickActionMap = {
  loadTab: updateCurrentMarkdownId
};

const mapStateToProps = state => ({
  markdownFiles: getMarkdownFiles(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick({ target }, id) {
    const action = handleClickActionMap[target.name](id);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
