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
    <div>
      {questions.map((question) => (
        <QuestionLink to={`/question-${question.id}`}>
          <div key={question.id}>
            <div>
              <span>{question.place}</span>
              <span>{question.language}</span>
            </div>
            <p>{question.title}</p>
            <p>{question.content}</p>
          </div>
        </QuestionLink>
      ))}
    </div>
  );
};

export default List;

//styled-components

const QuestionLink = styled(Link)`
  text-decoration: none;
`;
