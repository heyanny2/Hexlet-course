/*Write a MarkdownEditor component that is a React wrapper on @toast-ui/editor.*/

import React from 'react';
import ReactDOM from "react-dom";
import Editor from '@toast-ui/editor';

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const editor = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => this.onChange(editor));
  }

  onChange = (editor) => {
    const { onContentChange } = this.props;
    onContentChange(editor.getMarkdown());
  };

  render() {
    return <div ref={this.editorRef} />;
  }
}

ReactDOM.render(
  <MarkdownEditor onContentChange={console.log} />,
  document.getElementById("container")
);
