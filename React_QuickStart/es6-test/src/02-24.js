class Person {
  constructor(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;
    if (Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }
  // static 키워드가 부여된 것은 정적 멤버이다. 그렇지않은 것은 인스턴스 멤버이다.
  static getPersonCount() {
    return Person.count;
  }

  toString() {
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
  }
}

var p1 = new Person('홍길동', '010=1234-5678', '서울');

var p2 = new Person('이주노', '010=5555-5793', '김포');

console.log(p1.toString()); // toString 처럼 쭉 ㄴ텍스트로 알려줌
console.log(Person.getPersonCount()); // Person이 총 몇명인가? (count로 봄) = 2

class Employees extends Person {
  constructor(name, tel, address, empno, dept) {
    super(name, tel, address);
    this.empno = empno;
    this.dept = dept;
  }
  toString() {
    return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
  }
  getEmpInfo() {
    return `${this.empno}  : ${this.name}은 ${this.dept} 부서 입니다.`;
  }
}

let e1 = new Employees('이몽룡', '010-2222-2222', '판교', 'A12311', '재무');
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());
