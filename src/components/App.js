import React from 'react';
import DocumentsContainer from '../containers/DocumentsContainer';
import TabsContainer from '../containers/tab/TabsContainer';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <TabsContainer />
      <DocumentsContainer />
    </>
  );
}
