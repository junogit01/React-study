import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  // JS Zone
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    // HTML zone
    <Container className="App">
      <Title>Counter App</Title>
      <Contents>
        {/* label로 "-"라는 string 타입 반환, onClick에 sub라는 함수 전달해 void형 만족 */}
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        {/* {/* label로 "+"라는 string 타입 반환, onClick에 add라는 함수 전달해 void형 만족 */}
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}

export default App;
