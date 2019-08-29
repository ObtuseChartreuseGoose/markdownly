import { connect } from 'react-redux';
import Tabs from '../../components/tab/Tabs';
import { updateCurrentMarkdownId } from '../../actions/currentMarkdownIdActions';
import { getMarkdownFiles } from '../../selectors/markdownSelectors';

// todo: make deleteTab
const handleClickActionMap = {
  loadTab: updateCurrentMarkdownId
  // deleteTab: updateSubtitle
};


const mapStateToProps = state => ({
  markdownFiles: getMarkdownFiles(state)
});


// todo: make mapDispatchToProps

const mapDispatchToProps = dispatch => ({
  handleClick({ target }, id) {
    const action = handleClickActionMap[target.name](id);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
