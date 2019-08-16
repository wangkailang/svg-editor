import * as React from 'react';
import Editor from './Editor';
import styled from 'styled-components';
const codeStr = require('./file.txt');

interface Props {
  title: string
}

const Title = styled.h2`
  text-align: center;
  padding: 26px 0 10px 0;
`
const Main = styled.div`
  display: flex;
`
const Playground = styled.div`
  border : 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
`

const Show = styled.div`
  width: 30%;
  border : 1px solid #ccc;
`

const App: React.FC<Props> = ({ title }) => {
  const [code, setCode] = React.useState(codeStr.default);
  const handleChange = React.useCallback(c => {
    setCode(c);
  }, [setCode]);

  return (
    <div>
      <Title>
        {title}
      </Title>
      <Main>
        <Playground>
          <Editor code={code} handleChange={handleChange} />
        </Playground>
        <Show dangerouslySetInnerHTML={{ __html: code }} />
      </Main>
    </div>
  )
}

export default App;