import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

function Tabs({ markdownFiles, handleClick }) {
  const idArray = Object.keys(markdownFiles);

  const markdownFilesItems = idArray.map(id => {
    const file = markdownFiles[id];

    return (
      <li key={id}>
        <Tab title={file.title} id={id} handleClick={handleClick}/>
      </li>
    );
  });

  return (
    <ul>
      {markdownFilesItems}
    </ul>
  );
}

Tabs.propTypes = {
  markdownFiles: PropTypes.shape({
    title: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired
};

export default Tabs;
