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
          <QuestionLink to={`/question-${question.id}`}>
            <Thread key={question.id}>
              <ThreadHead>
                {/* 사이트 네임 태그 */}
                <Place>{question.place}</Place>
                {/* 언어 태그 */}
                <Language>{question.language}</Language>
              </ThreadHead>
              <h2>{question.title}</h2>
              <p>{question.content}</p>
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
  background-color: #252527;
  height: calc(100vh - 88px); // -88px (헤더 높이)
  display: flex;
  justify-content: center;
`;
const Newsfeed = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  min-width: 867px;
  border: 1px solid red;
`;
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 1px solid white;
  background-color: #44454a;
  color: #fff;
`;
const ThreadHead = styled.div`
  display: flex;
  justify-content: space-between;
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
