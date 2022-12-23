import styled from 'styled-components';
import { useState } from 'react';

const HintList = ({ question }) => {
  const [level, setLevel] = useState('');

  const levelHandleChange = (e) => {
    setLevel(e.target.value);
  };

  const Highhints = question.hints?.filter((hint) => hint.level === '상');
  const Middlehints = question.hints?.filter((hint) => hint.level === '중');
  const Lowhints = question.hints?.filter((hint) => hint.level === '하');

  return (
    <Middle>
      <div>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="상"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>상</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="중"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>중</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="하"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>하</LevelCheckSpan>
        </LevelCheckLabel>
      </div>
      {/* {question.hints?.map((hint) => (
        <HintBox key={hint.id}>
          <HintTextBox>{hint.hint}</HintTextBox>
          <InputNamePassword
            type="text"
            placeholder="이름 입력"
            value={hint.writer}
          />
          <InputNamePassword
            type="password"
            placeholder="비밀번호 입력"
            value={hint.password}
          />
          <DeleteUpdateButton>수정</DeleteUpdateButton>
          <DeleteUpdateButton>삭제</DeleteUpdateButton>
        </HintBox>
      ))} */}
    </Middle>
  );
};

export default HintList;

const Middle = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  min-width: 1000px;
  /* border: 1px solid red; */
  /* background-color: yellow; */
`;

const LevelCheckLabel = styled.label`
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 5px;
  position: relative;
  left: 43%;
`;
const LevelCheckSpan = styled.span`
  font-size: 18px;
  width: 36px;
  height: 36px;
  background: #44454a;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
`;

const LevelCheckRadio = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    text-align: center;
    display: none;
  }
  &:checked + ${LevelCheckSpan} {
    scale: 1.1;
    background-color: ${(props) =>
      props.value === '상'
        ? '#0DF0AC'
        : props.value === '중'
        ? '#89F9D7'
        : '#CBFFEF'};
  }
  display: none;
`;

const HintBox = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 350px;
  background-color: #44454a;
  border-radius: 20px;
  padding: 24px;
  position: relative;
`;
const HintTextBox = styled.div`
  width: 100%;
  min-height: 220px;
  background-color: #2f2f33;
  border: transparent;
  font-size: 20px;
  color: #ffffff;
  border-radius: 20px;
`;

const InputNamePassword = styled.input`
  width: 190px;
  height: 40px;
  background-color: #2f2f33;
  border-radius: 20px;
  position: relative;
  border: none;
  color: #ffffff;
  margin-top: 40px;
  left: 41%;
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

const DeleteUpdateButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #90969e;
  border-radius: 20px;
  border: transparent;
  position: relative;
  margin-left: 10px;
  left: 42%;
  cursor: pointer;
`;
