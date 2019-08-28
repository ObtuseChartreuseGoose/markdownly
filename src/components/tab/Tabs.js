import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

function Tabs({ markdownFiles }) {
  const markdownFilesItems = markdownFiles.map(file => (
    <li key={file.id}>
      <Tab title={file.title} id={file.id}/>
    </li>
  ));

  return (
    <ul>
      {markdownFilesItems}
    </ul>
  );
}

Tabs.propTypes = {
  markdownFiles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }))
};

export default Tabs;
