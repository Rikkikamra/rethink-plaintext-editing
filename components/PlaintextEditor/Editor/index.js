import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import PropTypes from 'prop-types';
import 'draft-js/dist/Draft.css';

function MyEditor({ file, write }) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return <Editor/>;
}

// ReactDOM.render(<MyEditor />);
MyEditor.propTypes = {
    file: PropTypes.object,
    write: PropTypes.func,
  
  };
  
export default MyEditor;