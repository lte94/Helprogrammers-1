import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';

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
        <div key={question.id}>
          <div>
            <span>{question.place}</span>
            <span>{question.language}</span>
          </div>
          <p>{question.title}</p>
          <p>{question.content}</p>
        </div>
      ))}
    </div>
  );
};

export default List;

//styled-components
