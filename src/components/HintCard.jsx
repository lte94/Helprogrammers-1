import styled from 'styled-components';
import { useState, useRef, Children } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { __deleteHint, __editHint } from '../redux/module/HintsSlice';
import DetailMarkDown from './DetailMarkDown';
import InputMarkDown from '../components/InputMarkDown';
import CustomButton from './CustomButton';

const HintCard = ({ hint }) => {
  const dispatch = useDispatch();
  const [writer, onChangeWriter] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [hintUpdate, onChangeUpdate] = useInput(hint.hint);
  const [isOpen, setIsOpen] = useState(false);
  const focusWriter = useRef();
  const focusPassword = useRef();

  const edithint = {
    id: hint.id,
    hint: hintUpdate,
    writer: hint.writer,
    password: Number(hint.password),
    level: hint.level,
    questionId: hint.questionId,
  };

  const openUpdateHandler = () => {
    if (writer.replace(/ /g, '') === '') {
      alert('이름를 입력해주세요!');
      focusWriter.current.focus();
      return;
    } else if (hint.writer !== writer) {
      alert('이름이 틀렸습니다!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('비밀번호는 4자리 숫자로 입력해주세요!');
      focusPassword.current.focus();
      return;
    } else if (hint.password !== Number(password)) {
      alert('비밀번호가 틀렸습니다!');
      return;
    }
    setIsOpen(!isOpen);
  };

  const onClickEditHintButtonHandler = (id, edithint) => {
    if (hintUpdate.replace(/ /g, '') === '') {
      alert('수정된 내용이 없습니다!');
      return;
    }
    if (window.confirm('수정을 완료하시겠습니까??') === true) {
      dispatch(__editHint({ id, edithint }));
      setIsOpen(false);
    } else {
      return;
    }
  };

  const onClickDeleteHintButtonHandler = (Id) => {
    if (writer.replace(/ /g, '') === '') {
      alert('이름를 입력해주세요!');
      focusWriter.current.focus();
      return;
    } else if (hint.writer !== writer) {
      alert('이름이 틀렸습니다!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('비밀번호는 4자리 숫자로 입력해주세요!');
      focusPassword.current.focus();
      return;
    } else if (hint.password !== Number(password)) {
      alert('비밀번호가 틀렸습니다!');
      return;
    } else if (window.confirm('정말 삭제하시겠습니까??') === true) {
      //확인
      dispatch(__deleteHint(Id));
    } else {
      //취소
      return;
    }
  };

  return (
    <HintBox key={hint.id}>
      {isOpen ? (
        <InputHint>
          <ContentTextArea
            type="text"
            onChange={onChangeUpdate}
            defaultValue={hint.hint}
            placeholder="내용을 입력해 주세요&#13;&#10;.&#13;&#10;[마크다운 에디터 사용법]&#13;&#10;1. 엔터를 두번 치면 줄바꿈이 됩니다.&#13;&#10;2. 코드의 처음과 끝에 ~~~를 입력하면 코드 창으로 바뀝니다.&#13;&#10;3. ~~~ 옆에 개발 언어를 입력하면 자동으로 하이라이팅 됩니다.&#13;&#10;.&#13;&#10;Ex)&#13;&#10;~~~javascript&#13;&#10;여기에 코드를 입력하세요.&#13;&#10;~~~"
          />
          <InputMarkDown
            language="javascript"
            content={hintUpdate !== '' ? hintUpdate : hint.hint}
          ></InputMarkDown>
        </InputHint>
      ) : (
        <DetailMarkDown content={hint.hint} />
      )}
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
      {isOpen ? (
        //완료
        <CustomButton
          name="hintSuccess"
          onClickEditHintButtonHandler={() =>
            onClickEditHintButtonHandler(hint.id, edithint)
          }
        >
          {Children}
        </CustomButton>
      ) : (
        // 수정
        <CustomButton name="hintUpdate" openUpdateHandler={openUpdateHandler}>
          {Children}
        </CustomButton>
      )}
      {/* 삭제 */}
      <CustomButton
        name="hintDelete"
        onClickDeleteHintButtonHandler={() =>
          onClickDeleteHintButtonHandler(hint.id)
        }
      >
        {Children}
      </CustomButton>
    </HintBox>
  );
};

export default HintCard;

const HintBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  padding: 24px;
  position: relative;
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
`;

// const HintTextBox = styled.div`
//   min-width: 100%;
//   min-height: 220px;
//   word-break: break-word;
//   table-layout: fixed;
//   background-color: ${(props) => props.theme.colors.insidecard};
//   border: transparent;
//   padding: 20px;
//   font-size: 20px;
//   color: ${(props) => props.theme.colors.textcolor};
//   border-radius: 20px;
//   word-break: break-all;
//   white-space: pre-line;
// `;

// const HintUpdateBox = styled.textarea`
//   min-width: 100%;
//   min-height: 220px;
//   word-break: break-word;
//   table-layout: fixed;
//   background-color: ${(props) => props.theme.colors.insidecard};
//   border: transparent;
//   padding: 20px;
//   font-size: 20px;
//   color: ${(props) => props.theme.colors.textcolor};
//   border-radius: 20px;
//   resize: none;
// `;

const InputNamePassword = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  position: relative;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  margin-top: 40px;
  left: 41%;
  margin-left: 10px;
  padding-left: 16px;
  &::placeholder {
    padding-left: 2px;
    color: ${(props) => props.theme.colors.placeholder};
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

const DeleteUpdateButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.subbutton};
  border-radius: 20px;
  border: transparent;
  position: relative;
  margin-left: 10px;
  left: 42%;
  cursor: pointer;
`;
