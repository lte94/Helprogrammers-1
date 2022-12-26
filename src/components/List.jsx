import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import ListCard from './ListCard';
import { useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const searchTerm = decodeURI(location.search.slice(3).toLowerCase());

  useEffect(() => {
    dispatch(__getQuestions());
  }, [dispatch]);

  const { error, isLoading, questions } = useSelector(
    (state) => state.questions,
  );

  const searchedQuestions = searchTerm
    ? questions.filter(
        (question) =>
          question.place.includes(searchTerm) ||
          question.language.includes(searchTerm) ||
          question.title.includes(searchTerm) ||
          question.content.includes(searchTerm),
      )
    : questions;

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{questions.error.message}</div>;
  }

  return (
    <MainDiv>
      <NewsFeed>
        {searchedQuestions.map((question) => (
          <ListCard question={question} key={question.id} />
        ))}
      </NewsFeed>
    </MainDiv>
  );
};

export default List;

const MainDiv = styled.main`
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
