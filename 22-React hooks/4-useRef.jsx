/*Write a MarkdownEditor component that is a React wrapper on @toast-ui/editor plugin bootstrap-markdown.*/

import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  const rootElement = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: rootElement.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => onContentChange(editor.getMarkdown()));
  });

  return <div ref={rootElement} />;
};

ReactDOM.render(
  <MarkdownEditor onContentChange={console.log} />,
  document.getElementById("container")
);
