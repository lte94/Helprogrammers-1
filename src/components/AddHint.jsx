import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { __addHint } from '../redux/module/HintsSlice';

const AddHint = ({ question }) => {
  const dispatch = useDispatch();
  const [hint, onChangeHint] = useInput('');
  const [writer, onChangeWriter] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [addlevel, onChangeAddLevel] = useInput('');

  const newhint = {
    id: uuidv4(),
    hint: hint,
    writer: writer,
    password: Number(password),
    level: addlevel,
    questionId: question.id,
  };

  const onClickAddHint = (event) => {
    event.preventDefault();
    if (hint.replace(/ /g, '') === '') {
      alert('hint를 입력해주세요!');
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('작성자를 입력해주세요!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('password를 4자리 숫자로 입력해주세요!');
      return;
    } else if (addlevel.replace(/ /g, '') === '') {
      alert('level을 선택해주세요!');
      return;
    }
    dispatch(__addHint(newhint));
  };

  return (
    <Middle>
      <AddHintBox>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="상"
            onChange={onChangeAddLevel}
          />
          <LevelCheckSpan>상</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="중"
            onChange={onChangeAddLevel}
          />
          <LevelCheckSpan>중</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="하"
            onChange={onChangeAddLevel}
          />
          <LevelCheckSpan>하</LevelCheckSpan>
        </LevelCheckLabel>
        <InputNamePassword
          type="text"
          placeholder="이름 입력"
          onChange={onChangeWriter}
        />
        <InputNamePassword
          type="Number"
          placeholder="비밀번호 입력"
          onChange={onChangePassword}
        />
        <AddButton onClick={onClickAddHint}>확인</AddButton>
        <br />
        <InputHint
          type="text"
          placeholder="힌트를 입력해 주세요!"
          onChange={onChangeHint}
        />
      </AddHintBox>
    </Middle>
  );
};

export default AddHint;

//styled-components

const Middle = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  min-width: 1000px;
`;

const AddHintBox = styled.form`
  width: 100%;
  min-height: 200px;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  padding: 24px;
`;
const LevelCheckLabel = styled.label`
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 5px;
`;
const LevelCheckSpan = styled.span`
  font-size: 18px;
  width: 36px;
  height: 36px;
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.placeholder};
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
    color: black;
    background-color: ${(props) =>
      props.value === '상'
        ? props.theme.colors.high
        : props.value === '중'
        ? props.theme.colors.middle
        : props.theme.colors.low};
  }

  display: none;
`;

const InputNamePassword = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  position: relative;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  left: 36%;
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const AddButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.pointcolor};
  border-radius: 20px;
  border: transparent;
  position: relative;
  left: 37%;
  cursor: pointer;
`;
const InputHint = styled.textarea`
  margin-top: 30px;
  width: 100%;
  min-height: 150px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border: transparent;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textcolor};
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  resize: none;
  &::placeholder {
    padding-left: 2px;
    color: #90969e;
    font-size: 20px;
  }
`;
