import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import { __getSearchedQuestions } from '../redux/module/QuestionsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(__getSearchedQuestions(term));
  };

  const resetSearchHandler = () => {
    setTerm('');
    dispatch(__getQuestions());
  };

  return (
    <HeaderBox>
      <MainLink to="/" onClick={resetSearchHandler}>
        <Helprogrammers>
          <Hel>Hel</Hel>
          <Programmers>programmers</Programmers>
        </Helprogrammers>
      </MainLink>
      <SearchForm onSubmit={searchHandler}>
        <SearchIcon src="/assets/search.png" />
        <SearchInput
          type="text"
          value={term}
          placeholder="알고리즘 문제 검색하기"
          onChange={(e) => setTerm(e.target.value)}
        />
      </SearchForm>
      <AddLink to="/add">
        <AddQuestionButton>
          <AddQuestionIcon src="/assets/write.png"></AddQuestionIcon>질문 작성
        </AddQuestionButton>
      </AddLink>
      <div></div>
    </HeaderBox>
  );
};

export default Header;

// styled-components

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: 88px;
  background-color: black;
`;

const MainLink = styled(Link)`
  text-decoration: none;
`;

const Helprogrammers = styled.p`
  width: 298px;
  height: 44px;
  top: 27px;
  left: 36px;
  position: relative;
  font-size: 36px;
`;
const Hel = styled.span`
  color: #0df0ac;
`;

const Programmers = styled.span`
  color: white;
`;

const SearchForm = styled.form`
  max-width: 867px;
  width: 100%;
  height: 44px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  position: absolute;
  border-radius: 22px;
  background-color: #2f2f33;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  color: white;
  font-size: 16px;
  position: relative;
  background: transparent;
  outline: none;
  border: none;
`;

const SearchIcon = styled.img`
  margin: 10px 12px 10px 16px;
  width: 24px;
  height: 24px;
`;

const AddLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  max-width: 867px;
  width: fit-content;
  height: 44px;
  top: 20px;
  right: 28px;
`;

const AddQuestionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px 10px;
  font-size: 16px;
  gap: 10px;
  background-color: rgba(13, 240, 172, 1);
  border-radius: 22px;
  border: none;
  left: 80%;

  top: 18px;
  cursor: pointer;
`;

const AddQuestionIcon = styled.img`
  width: 24px;
  height: 24px;
`;
