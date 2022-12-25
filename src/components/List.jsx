import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import ListCard from './ListCard';

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
      <NewsFeed>
        {questions.map((question) => (
          <ListCard question={question} key={question.id} />
        ))}
      </NewsFeed>
    </Maindiv>
  );
};

export default List;

const Maindiv = styled.main`
  background-color: rgba(37, 37, 39, 1);
  height: calc(100vh - 88px); // -88px (헤더 높이)
  display: flex;
  justify-content: center;
`;
const NewsFeed = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 40px;
  width: 868px;
  gap: 24px;
`;
