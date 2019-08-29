import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdown, currentMarkdownId }) {
  return (
    <textarea className={styles.Editor} value={markdown} onChange={event => updateMarkdown(event, currentMarkdownId)} />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired,
  currentMarkdownId: PropTypes.string.isRequired,
};

export default Editor;
