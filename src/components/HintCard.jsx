import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { __deleteHint } from '../redux/module/HintsSlice';

const HintCard = ({ hint }) => {
  const dispatch = useDispatch();
  const [writer, onChangeWriter] = useInput('');
  const [password, onChangePassword] = useInput('');

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
    } else if (hint.password !== password) {
      alert('password가 틀렸습니다!');
      return;
    }
    dispatch(__deleteHint(Id));
  };

  return (
    <HintBox key={hint.id}>
      <HintTextBox>{hint.hint}</HintTextBox>
      <InputNamePassword
        type="text"
        placeholder="이름 입력"
        onChange={onChangeWriter}
      />
      <InputNamePassword
        type="password"
        placeholder="비밀번호 입력"
        onChange={onChangePassword}
      />
      <DeleteUpdateButton>수정</DeleteUpdateButton>
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
  padding: 20px;
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
