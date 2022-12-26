import styled from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
// import { __getSearchedQuestions } from '../redux/module/QuestionsSlice';
import { changeTheme } from '../redux/module/ThemeSlice';

const Header = () => {
  const { hellMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/?q=${term}`);
  };

  const resetSearchHandler = () => {
    setTerm('');
    dispatch(__getQuestions());
  };

  const changeModeHandler = () => {
    dispatch(changeTheme());
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
        <SearchIcon src="/assets/search.png" />{' '}
        <SearchInput
          type="text"
          value={term}
          placeholder="알고리즘 문제 검색하기"
          onChange={(e) => setTerm(e.target.value)}
        />
      </SearchForm>

      <HeaderButtons>
        <Link to="/add">
          <AddQuestionButton>
            <AddQuestionIcon
              src={
                hellMode ? '/assets/white-write.png' : '/assets/black-write.png'
              }
            ></AddQuestionIcon>
            질문 작성
          </AddQuestionButton>
        </Link>
        <ChangeModeButton onClick={changeModeHandler}>
          {hellMode ? '🔥' : '🌝'}
        </ChangeModeButton>
      </HeaderButtons>
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
  background-color: ${(props) => props.theme.colors.header};
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
  color: ${(props) => props.theme.colors.pointcolor};
`;

const Programmers = styled.span`
  color: ${(props) => props.theme.colors.textcolor};
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
  background-color: ${(props) => props.theme.colors.searchbar};
`;

const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  color: ${(props) => props.theme.colors.textcolor};
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

const HeaderButtons = styled.div`
  text-decoration: none;
  position: absolute;
  max-width: 867px;
  width: fit-content;
  height: 44px;
  top: 20px;
  right: 28px;
  display: flex;
  gap: 20px;
`;

const AddQuestionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px 10px;
  font-size: 16px;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.pointcolor};
  color: ${(props) => props.theme.colors.reversetextcolor};
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

const ChangeModeButton = styled.button`
  width: 46px;
  height: 46px;
  background-color: ${(props) => props.theme.colors.togglebutton};
  border-radius: 23px;
  border: none;
  left: 80%;
  top: 18px;
  font-size: 24px;
  cursor: pointer;
`;
