import * as React from 'react';
import REditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
require('prismjs/components/prism-jsx');

import styled from 'styled-components';

interface Props {
  code: string;
  handleChange: (code: string) => void;
}

const Container = styled.div`
  font-family: '"Fira code", "Fira Mono", monospace';
  font-size: 14px;
  background-color: #fafafa;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  padding: 15px;
  margin-bottom: 15px;
  textarea {
    outline: 0;
  }
`;

const Editor: React.FC<Props> = props => {
  console.log('code', props.code);
  return (
    <Container>
      <REditor
        value={props.code}
        onValueChange={props.handleChange}
        highlight={code => highlight(code, languages.jsx)}
        className="container__editor"
      />
    </Container>
  );
};

export default Editor;
