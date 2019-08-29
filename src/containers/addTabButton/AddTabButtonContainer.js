import { connect } from 'react-redux';
import AddTabButton from '../../components/addTabButton/AddTabButton';
import { addMarkdownFile } from '../../actions/markdownActions';

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(addMarkdownFile());
  }
});

export default connect(null, mapDispatchToProps)(AddTabButton);
