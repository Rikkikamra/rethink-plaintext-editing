import React from 'react';
import PropTypes from 'prop-types';
import SimpleEditor from 'simple-text-editor-react';
import css from './style.css';

function PlaintextEditor({ file, write }) {
  //const [activeFile]
  console.log(file, write);
  // return (
  //   <div className={css.editor}>
  //     <h3>TODO</h3>
  //     <i>text/plain</i>
  //   </div>
  // );
  return (
    <SimpleEditor 
    onChange={(file)=>{
      // value contains the html value and all keystroke events 
    }}
    onImageUpload={(image, callback)=>{
      //upload image then return the url in callback
      //callback(url)
    }}
    containerStyle={{
      width: '100%',
      height: '100%',
      border: '1px solid #cec7c7',
      position: 'relative' // position relative is required if showWordCharCount !== false
    }}
    value={file.name} //pass initial value / updated value .
    // id={file.name} // not required but can be useful in some usecases.
    showWordCharCount // if true word and char count will be shown. Default value is true.
    />
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  // console.log(file)
};

export default PlaintextEditor;

// import React, { Component } from 'react';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// class PlaintextEditor extends Component {
//    constructor(props) {
//    super(props);
//    this.state = {
//      editorState: EditorState.createEmpty()
//      };
//    }
//  onEditorStateChange = editorState => {
//     this.setState({ editorState });
//  };
// render() {
// const { editorState } = this.state;
// return (
//   <div>
//     <Editor 
//       editorState={editorState}
//       wrapperClassName="rich-editor demo-wrapper"
//       editorClassName="demo-editor"
//       onEditorStateChange={this.onEditorStateChange}
//       placeholder="The message goes here..." />
//   </div>
// );
// } }
// export default  PlaintextEditor ;
