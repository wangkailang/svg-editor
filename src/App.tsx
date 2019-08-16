import * as React from 'react';
import Editor from './Editor';
import styled from 'styled-components';
import codes from './example';

type CodeKeys = keyof typeof codes;

interface Props {
  title: string
}

const Title = styled.h2`
  text-align: center;
  padding: 26px 0 10px 0;
`
const Main = styled.div`
  margin: 40px 15px;
`

const Show = styled.div`
  background-color: #fafafa;
  padding: 15px;
`
const Select = styled.select`
`

const App: React.FC<Props> = ({ title }) => {
  const [option, setOption] = React.useState<CodeKeys>('init');
  const handleSelect = React.useCallback((evt: any) => {
    const val: CodeKeys = evt.target.value || 'init';
    setOption(val);
    setCode(codes[val])
  }, [setOption]);

  const [code, setCode] = React.useState(codes['init']);
  const handleChange = React.useCallback(c => {
    setCode(c);
  }, [setCode]);

  return (
    <div>
      <Title>
        {title}
      </Title>
      <Select
        onChange={handleSelect}
      >
        <option value="init">init</option>
        <option value="moon">moon</option>
      </Select>
      <Main>
        <Editor code={code} handleChange={handleChange} />
        <h3>Preview</h3>
        <Show dangerouslySetInnerHTML={{ __html: code }} />
      </Main>
    </div>
  )
}

export default App;