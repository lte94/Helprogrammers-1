import styled from 'styled-components';

const HintCard = ({ hint }) => {
  return (
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
