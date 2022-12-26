import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { __deleteHint, __editHint } from '../redux/module/HintsSlice';

const HintCard = ({ hint }) => {
  const dispatch = useDispatch();
  const [writer, onChangeWriter] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [hintUpdate, onChangeUpdate] = useInput('');
  const [isOpen, setIsOpen] = useState(false);

  console.log(hint.hint);
  const edithint = {
    id: hint.id,
    hint: hintUpdate,
    writer: hint.writer,
    password: Number(hint.password),
    level: hint.level,
    questionId: hint.questionId,
  };

  const openUpdateHandler = () => {
    if (hint.writer !== writer) {
      alert('작성자가 틀렸습니다!');
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('작성자를 입력해주세요!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('password를 4자리 숫자로 입력해주세요!');
      return;
    } else if (hint.password !== Number(password)) {
      alert('password가 틀렸습니다!');
      return;
    }
    setIsOpen(!isOpen);
  };

  const onClickEditHintButtonHandler = (id, edithint) => {
    if (hintUpdate.replace(/ /g, '') === '') {
      alert('수정된 내용이 없습니다!');
    }
    dispatch(__editHint({ id, edithint }));
    setIsOpen(false);
  };

  const onClickDeleteHintButtonHandler = (Id) => {
    if (hint.writer !== writer) {
      alert('작성자가 틀렸습니다!');
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('작성자를 입력해주세요!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('password를 4자리 숫자로 입력해주세요!');
      return;
    } else if (hint.password !== Number(password)) {
      alert('password가 틀렸습니다!');
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
        <HintUpdateBox
          type="text"
          onChange={onChangeUpdate}
          defaultValue={hint.hint}
        />
      ) : (
        <HintTextBox>
          <pre children={hint.hint} />
        </HintTextBox>
      )}
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
      {isOpen ? (
        <DeleteUpdateButton
          onClick={() => onClickEditHintButtonHandler(hint.id, edithint)}
        >
          완료
        </DeleteUpdateButton>
      ) : (
        <DeleteUpdateButton onClick={openUpdateHandler}>
          수정
        </DeleteUpdateButton>
      )}
      <DeleteUpdateButton
        onClick={() => onClickDeleteHintButtonHandler(hint.id)}
      >
        삭제
      </DeleteUpdateButton>
    </HintBox>
  );
};

export default HintCard;

const HintBox = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 350px;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
  padding: 24px;
  position: relative;
`;
const HintTextBox = styled.div`
  min-width: 100%;
  min-height: 220px;
  word-break: break-word;
  table-layout: fixed;
  background-color: ${(props) => props.theme.colors.insidecard};
  border: transparent;
  padding: 20px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textcolor};
  border-radius: 20px;
  word-break: break-all;
  white-space: pre-line;
`;

const HintUpdateBox = styled.textarea`
  min-width: 100%;
  min-height: 220px;
  word-break: break-word;
  table-layout: fixed;
  background-color: #2f2f33;
  border: transparent;
  padding: 20px;
  font-size: 20px;
  color: #ffffff;
  border-radius: 20px;
  resize: none;
`;

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
