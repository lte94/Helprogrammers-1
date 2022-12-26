import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __getQuestions,
  questionsActions,
} from '../redux/module/QuestionsSlice';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AddHint from '../components/AddHint';
import axios from 'axios';
import HintList from '../components/HintList';
import { __getHints } from '../redux/module/HintsSlice';

function Question() {
  const location = useLocation();
  const [questionState, setQuestionState] = useState('');
  const dispatch = useDispatch();
  const { hellMode } = useSelector((state) => state.theme);

  // useEfect로 axios 데이터 받아오기
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/questions${location.pathname}`,
      );
      // 받은데이터 state로 업로드
      setQuestionState(data);
    };
    getData();
  }, []);

  const { isLoading, error, hints } = useSelector((state) => state.hints);

  useEffect(() => {
    dispatch(__getHints());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const questionHints = hints?.filter(
    (hint) => hint.questionId === questionState.id,
  );

  const onClickDelete = (event) => {
    event.preventDefault();
    const check = window.confirm('진짜 삭제?');

    if (check) {
      console.log('삭제되었습니다.');
    } else {
      console.log('삭제 안되었습니다.');
    }
  };

  return (
    <QuestionContainer>
      <Wrapper>
        <QuestionHead>
          {/* 사이트 네임 태그 */}
          <Place>{questionState.place}</Place>
          {/* 언어 태그 */}
          <Language hellMode={hellMode}>
            <span className="dot" />
            {questionState.language}
          </Language>
        </QuestionHead>
        <QuestionTitle>
          <TitleFont>{questionState.title}</TitleFont>
          <form>
            <InputNamePassword type="text" placeholder="이름 입력" />
            <InputNamePassword type="password" placeholder="비밀번호 입력" />
            <AddButton>수정</AddButton>
            <AddButton onClick={(event) => onClickDelete(event)}>
              삭제
            </AddButton>
          </form>
        </QuestionTitle>

        <QuestionLink>Link</QuestionLink>
        <p>{questionState.content}</p>

        <QuestionCode>
          <CodeName>소스 코드</CodeName>
          <span>const nanana = banana;</span>
        </QuestionCode>
      </Wrapper>

      {/*  댓글 */}
      <AddHint question={questionState} key={questionState.id} />
      <HintList questionHints={questionHints} key={questionState.id} />
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
  color: #ffffff;
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
