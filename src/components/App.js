import React from 'react';
import DocumentsContainer from '../containers/DocumentsContainer';
import Header from '../components/header/Header';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Header />
      <DocumentsContainer />
    </>
  );
}
