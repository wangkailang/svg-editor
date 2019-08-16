import * as React from 'react';
import REditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-tsx';

interface Props {
  code: string
  handleChange: (code: string) => void
}

const Editor: React.FC<Props> = props => {
  return (
    <REditor
      value={props.code}
      onValueChange={props.handleChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  )
}

export default Editor;