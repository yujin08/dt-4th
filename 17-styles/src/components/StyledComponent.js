import React from 'react';
import styled, { keyframes } from 'styled-components';
// styled 라는 객체 안에 **HTML 태그에 대응하는 메서드 (div, button, span 등)**를 제공하는 방식으로 동작

// #4. styled-components 사용
/**
 * - CSS in JS 방식의 라이브러리 (= 패키지 설치)
 *   ㄴ js 안에 css를 작성함
 * - 컴포넌트 단위로 스타일 관리 가능
 * - 자동으로 고유한 클래스명이 생성 (스타일 충돌 방지)
 * - props를 기반으로 동적인 스타일 변경 가능
 */

/**
 * [장점]
 * - JS 파일 안에서 CSS를 정의하여 스타일과 컴포넌트를 하나의 단위로 관리 가능
 *
 * [단점]
 * - 런타임 성능 이슈
 *   ㄴ 스타일이 런타임에 적용, 큰 프로젝트에서는 문제가 발생할 수 있음
 */

console.log('styled >>>', styled);

// 1) 스타일 정의 (HTML 태그 + 백틱 (`) 형식)
const StyledContainer = styled.div`
  display: flex;
`;

const StyleBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};
  &:hover {
    transform: translateY(20px);
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
  }
`;

// #1. 애니메이션 정의
const divMove = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// #2. 애니메이션 적용한 컴포넌트 정의
const AniDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  &:hover {
    animation: ${divMove} 2s ease-in;
  }
`;
export default function StyledComponent() {
  return (
    <>
      <StyledContainer>
        <StyleBox bgColor="red">1</StyleBox>
        <StyleBox bgColor="orange">2</StyleBox>
        <StyleBox bgColor="yellow">3</StyleBox>
        <StyleBox>4</StyleBox>
      </StyledContainer>
      <Button primary>Click!</Button>
      <Button>Click!</Button>
      <AniDiv>애니메이션</AniDiv>
    </>
  );
}
/**
 * - StyledBox는 Styled.div로 생성된 React 컴포넌트
 * - 일반 React 컴포넌트처럼 props를 받을 수 있다
 * - props가 styled-components 내부로 전달되면 스타일 블록 내에서 사용할 수 있도록 처리함
 * - ${} 문자열 보간 방법
 */
