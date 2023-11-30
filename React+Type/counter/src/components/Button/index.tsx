import styled from '@emotion/styled';

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5772;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
// Props를 통해 데이터를 받을 준비를 하는 구문
interface Props {
  readonly label: string; // string 타입의 읽기전용 label이란 것이 필요하다.
  readonly onClick: () => void; // void 타입의 읽기전용 onclick 이벤트가 있어야한다.
}

// 부모 컴포넌트로부터 전달받는 매개 변수인 Props 데이터는 단순한 변수이므로 변수명 이름은 상관없다.
/*
export const Button = (props: Props) => {
  return <Container onClick={props.onClick}>{props.label}</Container>;
};*/

// 실무에선 다음과 같은 구조 분해할당을 통해 코드 작성
export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
}; // 어떻게 보면 구조 분해 할당을 통해 더 직관적으로 표현한 것이다.
