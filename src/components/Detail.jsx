import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __deleteDetail, __getDetail } from '../redux/module/DetailSlice';
import { useParams } from 'react-router-dom';

// props로 받은 question state
const Detail = () => {
  const dispatch = useDispatch();
  const { hellMode } = useSelector((state) => state.theme);

  const { isLoading, error, question } = useSelector((state) => state.detail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getDetail(id));
  }, []);

  if (isLoading) {
    return <div>해당 게시글은 삭제 되었습니다</div>;
  }
  if (error) {
    return <div>존재하지 않는 페이지 입니다..</div>;
  }

  // 삭제 버튼
  const deleteButton = (id) => {
    const reCheck = window.confirm('정말 삭제하시겠습니까?'); // confirm 으로 재확인
    if (reCheck) {
      dispatch(__deleteDetail(id)); // DetailSlice >> deleteDetail (action)
    } else {
      return;
    }
  };
  return (
    <Wrapper>
      <QuestionHead key={question.id}>
        {/* 사이트 네임 태그 */}
        <Place>{question.place}</Place>
        {/* 언어 태그 */}
        <Language hellMode={hellMode}>
          <span className="dot" />
          {question.language}
        </Language>
      </QuestionHead>
      <QuestionTitle>
        <TitleFont>{question.title}</TitleFont>
        <form>
          <InputNamePassword type="text" placeholder="이름 입력" />
          <InputNamePassword type="password" placeholder="비밀번호 입력" />
          <AddButton>수정</AddButton>
          <AddButton onClick={() => deleteButton(question.id)}>삭제</AddButton>
        </form>
      </QuestionTitle>

      <QuestionLink>Link</QuestionLink>

      <QuestionContent>{question.content}</QuestionContent>

      <QuestionCode>
        <CodeName>소스 코드</CodeName>
        <span>const nanana = banana;</span>
      </QuestionCode>
    </Wrapper>
  );
};

export default Detail;

// styled component

const QuestionContent = styled.p`
  color: ${(props) => props.theme.colors.textcolor};
`;

const Wrapper = styled.div`
  border: 1px solid red;
  width: 50%;
  padding: 24px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.card};
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
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.children === 'baekjoon'
      ? props.theme.colors.baekjoon
      : props.children === 'programmers'
      ? props.theme.colors.programmers
      : props.theme.colors.swexpert};
  color: black;
`;

const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
  gap: 10px;
  color: ${(props) => (props.hellMode === true ? '#FF2525' : '#FFFFFF')};
  span {
    height: 12px;
    width: 12px;
    background-color: ${(props) => props.theme.colors.pointcolor};
    border-radius: 50%;
  }
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
const InputNamePassword = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  position: relative;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  margin-left: 10px;
  padding-left: 16px;
  &::placeholder {
    padding-left: 2px;
    color: #90969e;
  }
  &:focus {
    box-shadow: 3px 3px 5px #aaa;
    scale: 1.01;
  }
`;
const AddButton = styled.button`
  height: 40px;
  background-color: transparent;
  border: transparent;
  color: ${(props) => props.theme.colors.pointcolor};
  position: relative;
  cursor: pointer;
`;
const QuestionLink = styled.a`
  color: ${(props) => props.theme.colors.pointcolor};
  font-weight: bold;
`;

const QuestionCode = styled.section`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.insidecard};
`;
const CodeName = styled.p`
  color: ${(props) => props.theme.colors.pointcolor};
  font-weight: bold;
`;
