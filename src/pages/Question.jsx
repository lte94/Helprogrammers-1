import AddHint from '../components/AddHint';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

function Question() {
  const dispatch = useDispatch();


  return (
    <QuestionContainer>
      <Wrapper>
        <QuestionHead>
          {/* 사이트 네임 태그 */}
          <Place>Baekjoon</Place>
          {/* 언어 태그 */}
          <Language>javascript</Language>
        </QuestionHead>

        <QuestionTitle>
          <TitleFont>제목</TitleFont>
          <form>
            <input name="name" placeholder="이름 입력"></input>
            <input name="password" placeholder="비밀번호 입력"></input>
            <button>수정</button>
            <button>삭제</button>
          </form>
        </QuestionTitle>

        <QuestionLink>Link</QuestionLink>

        <QuestionContent>이게 너무 어렵잖아요ㅠ</QuestionContent>

        <QuestionCode>
          <CodeName>소스 코드</CodeName>
          <span>const nanana = banana;</span>
        </QuestionCode>
      </Wrapper>
      
      {/*  댓글 */}
      <AddHint/>
    </QuestionContainer>

  );
}

export default Question;

const QuestionContainer = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  border: 1px solid red;
  width: 50%;
  padding: 24px;
  border-radius: 20px;
  background-color: #44454a;
`;

const QuestionHead = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
`;
const Place = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 30px;
  border: 1px solid white;
  border-radius: 20px;
`;
const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
`;
const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const TitleFont = styled.h1`
  font-size: 1.5vw;
  font-weight: bold;
`;
const QuestionLink = styled.a`
  color: #0df0ac;
  font-weight: bold;
`;
const QuestionContent = styled.p`
  color: #fff;
`;
const QuestionCode = styled.section`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #2f2f33;
`;
const CodeName = styled.p`
  color: #0df0ac;
  font-weight: bold;
`;
