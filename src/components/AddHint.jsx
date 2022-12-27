import styled from 'styled-components';
import { useRef, Children } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { __addHint } from '../redux/module/HintsSlice';
import InputMarkDown from '../components/InputMarkDown';
import CustomButton from './CustomButton';

const AddHint = ({ question }) => {
  const dispatch = useDispatch();
  const [hint, onChangeHint] = useInput('');
  const [writer, onChangeWriter] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [addlevel, onChangeAddLevel] = useInput('');
  const focusWriter = useRef();
  const focusPassword = useRef();
  const focusHint = useRef();

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
      focusHint.current.focus();
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('이름을 입력해주세요!');
      focusWriter.current.focus();
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('비밀번호를 4자리 숫자로 입력해주세요!');
      focusPassword.current.focus();
      return;
    } else if (addlevel.replace(/ /g, '') === '') {
      alert('난이도를 선택해주세요!');
      return;
    }
    if (window.confirm('작성을 완료하시겠습니까??') === true) {
      dispatch(__addHint(newhint));
    } else {
      return;
    }
  };

  return (
    <Middle>
      <AddHintBox>
        <HintBoxHeader>
          <div>
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
          </div>

          <InputNamePasswordWrapper>
            <InputNamePassword
              type="text"
              placeholder="이름 입력"
              ref={focusWriter}
              onChange={onChangeWriter}
            />
            <InputNamePassword
              type="Number"
              placeholder="비밀번호 입력"
              ref={focusPassword}
              onChange={onChangePassword}
            />
            <CustomButton name="AddButton" onClickAddHint={onClickAddHint}>
              {Children}
            </CustomButton>
          </InputNamePasswordWrapper>
        </HintBoxHeader>
        <InputHint>
          <ContentTextArea
            value={hint}
            type="text"
            placeholder="힌트를 입력해 주세요!&#13;&#10;.&#13;&#10;[마크다운 에디터 사용법]&#13;&#10;1. 엔터를 두번 치면 줄바꿈이 됩니다.&#13;&#10;2. 코드의 처음과 끝에 ~~~를 입력하면 코드 창으로 바뀝니다.&#13;&#10;3. ~~~ 옆에 개발 언어를 입력하면 자동으로 하이라이팅 됩니다.&#13;&#10;.&#13;&#10;Ex)&#13;&#10;~~~javascript&#13;&#10;여기에 코드를 입력하세요.&#13;&#10;~~~"
            ref={focusHint}
            onChange={onChangeHint}
          />
          <InputMarkDown language="javascript" content={hint}></InputMarkDown>
        </InputHint>
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
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HintBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
const InputNamePasswordWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
const InputNamePassword = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  left: 36%;
  padding-left: 16px;
  &::placeholder {
    padding-left: 2px;
    color: #90969e;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 8px 1px ${(props) => props.theme.colors.pointcolor};
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

const InputHint = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 224px;
  flex: none;
  resize: none;
`;

const ContentTextArea = styled.textarea`
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px 0px 0px 20px;
  border: none;
  padding: 22px;
  width: 50%;
  height: 100%;
  resize: none;
  outline: none;
  white-space: pre-wrap;
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.scrollbar};
    border: none;
  }
  ::placeholder {
    line-height: 20px;
  }
`;
