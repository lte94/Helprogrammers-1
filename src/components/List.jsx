import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, questions } = useSelector(
    (state) => state.questions,
  );

  useEffect(() => {
    dispatch(__getQuestions());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Maindiv>
      <Newsfeed>
        {questions.map((question) => (
          <QuestionLink to={`/question-${question.id}`} key={question.id}>
            <Thread>
              <ThreadHead>
                {/* 사이트 네임 태그 */}
                <Place>{question.place}</Place>
                {/* 언어 태그 */}
                <Language>
                  <span class="dot" />
                  {question.language}
                </Language>
              </ThreadHead>
              <ThreadBody>
                <h2>{question.title}</h2>
                <p>{question.content}</p>
              </ThreadBody>
            </Thread>
          </QuestionLink>
        ))}
      </Newsfeed>
    </Maindiv>
  );
};

export default List;

//styled-components

const QuestionLink = styled(Link)`
  text-decoration: none;
`;

const Maindiv = styled.main`
  background-color: rgba(37, 37, 39, 1);
  height: calc(100vh - 88px); // -88px (헤더 높이)
  display: flex;
  justify-content: center;
`;
const Newsfeed = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 40px;
  width: 868px;
  gap: 24px;
`;
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 216px;
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(68, 69, 74, 1);
`;
const ThreadHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Place = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 20px;
  background-color: ${(props) => {
    if (props.children === 'baekjoon') {
      return 'rgba(162, 255, 147, 1)';
    } else if (props.children === 'programmers') {
      return 'rgba(204, 136, 255, 1)';
    } else {
      return 'rgba(135, 255, 255, 1)';
    }
  }};

  color: black;
`;
const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
  gap: 10px;
  color: white;
  span {
    height: 12px;
    width: 12px;
    background-color: rgba(13, 240, 172, 1);
    border-radius: 50%;
  }
`;
const ThreadBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
  }
`;
