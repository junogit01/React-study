// 타입 별칭
// string 타입에 대한 별칭
type MyType = string;
let a: MyType = 'hello';

// 복잡한  타입에 대한 별칭 부여
type MyType2 = {name: string; age: number};
let b: MyType2 = {name: '홍길동', age: 20};

// 선택적 속성과 읽기 전용 속성
type MyType3 = {
  name: string;
  age?: number; // 선택적 속성 타입 정의시 ? 사용
  readonly email: string; // 읽기 전용
};
let c: MyType3 = {name: '방자', email: 'gdhong@test.com'};

// 읽기 전용이므로 에러 발생
// c.email ="gdhong@test.com"

// 튜플 타입
type TupleType = [string, number];
let d: TupleType = ['Hello', 100];

// 튜플 타입 이용간 배열 내부의 값, 타입의 순서, 항목의 개수까지 지정할 수 있다.
