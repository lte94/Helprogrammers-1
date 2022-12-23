import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderBox>
      <MainLink to="/">
        <Helprogrammers>
          <Hel>Hel</Hel>
          <Programmers>programmers</Programmers>
        </Helprogrammers>
      </MainLink>
      <SearchForm>
        <SearchButton></SearchButton>
        <SearchInput type="search" placeholder="알고리즘 문제 검색하기" />
      </SearchForm>
      <AddLink to="/add">
        <AddButton>질문 추가하기</AddButton>
      </AddLink>
      <div></div>
    </HeaderBox>
  );
};

export default Header;

// styled-components

const HeaderBox = styled.div`
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: 88px;
  background-color: black;
  display: flex;
  position: relative;
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
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border-radius: 20px;
  background-color: #2f2f33;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  left: 30px;
  position: relative;
  background: transparent;
  border: none;
`;

const SearchButton = styled.button`
  width: 18px;
  height: 18px;
  position: relative;
  left: 5px;
  font-size: 20px;
`;

const AddLink = styled(Link)`
  text-decoration: none;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  left: 80%;
  top: 18px;
  cursor: pointer;
`;
