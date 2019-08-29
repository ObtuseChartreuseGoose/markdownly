import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';

function Document({ markdown, addMarkdown, currentMarkdownId }) {
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={addMarkdown} currentMarkdownId={currentMarkdownId} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  addMarkdown: PropTypes.func.isRequired,
  currentMarkdownId: PropTypes.string.isRequired,
};

export default Document;
