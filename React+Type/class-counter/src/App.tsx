import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { Component } from 'react';

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

type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0, // 초기값 설정
    };
  }
  private sub = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <Container className="App">
        <Title>Counter App</Title>
        <Contents>
          {/* label로 "-"라는 string 타입 반환, onClick에 sub라는 함수 전달해 void형 만족 */}
          <Button label="-" onClick={this.sub} />
          <Label data={counter} />
          {/* {/* label로 "+"라는 string 타입 반환, onClick에 add라는 함수 전달해 void형 만족 */}
          <Button label="+" onClick={this.add} />
        </Contents>
      </Container>
    );
  }
}

export default App;
