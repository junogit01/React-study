import styled from '@emotion/styled';
import { Component } from 'react';
const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly data: number; // number 타입의 읽기전용 파일이 필요하다 why? 표시되는 것이 숫자니까 number 타입이 필요한 것이다.
}

export class Label extends Component<Props> {
  render() {
    const { data } = this.props;
    return <Container>{data}</Container>;
  }
}
