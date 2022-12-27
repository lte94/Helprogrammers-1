import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CustomButton = (props) => {
  const { hellMode } = useSelector((state) => state.theme);
  // eslint-disable-next-line default-case
  switch (props.name) {
    // Header.jsx
    case 'AddQuestionButton':
      return (
        <AddQuestionButton>
          <AddQuestionIcon
            src={
              hellMode ? '/assets/white-write.png' : '/assets/black-write.png'
            }
          ></AddQuestionIcon>
          질문 작성
        </AddQuestionButton>
      );
    case 'ChangeModeButton':
      return (
        <ChangeModeButton onClick={props.changeModeHandler}>
          {hellMode ? '🔥' : '🌝'}
        </ChangeModeButton>
      );

    // AddHint.jsx
    case 'AddButton':
      return <AddButton onClick={props.onClickAddHint}>확인</AddButton>;

    // Detail.jsx
    case 'updateButton':
      return <AddButtonn onClick={props.updateButton}>수정</AddButtonn>;
    case 'deleteButton':
      return <AddButtonn onClick={props.deleteButton}>삭제</AddButtonn>;

    // HintCard.jsx
    case 'hintSuccess':
      return (
        <DeleteUpdateButton onClick={props.onClickEditHintButtonHandler}>
          완료
        </DeleteUpdateButton>
      );
    case 'hintUpdate':
      return (
        <DeleteUpdateButton onClick={props.openUpdateHandler}>
          수정
        </DeleteUpdateButton>
      );
    case 'hintDelete':
      return (
        <DeleteUpdateButton onClick={props.onClickDeleteHintButtonHandler}>
          삭제
        </DeleteUpdateButton>
      );

    // Input.jsx
    case 'InputBackButton':
      return (
        <InputBackButton type="button" onClick={props.navigate}>
          ← 나가기
        </InputBackButton>
      );
    case 'InputAddButton':
      return <InputAddButton type="submit">작성완료</InputAddButton>;

    // UpdateComponent.jsx
    case 'updateBackButton':
      return (
        <InputBackButton type="button" onClick={props.setEdit}>
          ← 나가기
        </InputBackButton>
      );
    case 'updateSuccessButton':
      return (
        <InputAddButton type="submit" onClick={props.onSubmitEditor}>
          작성완료
        </InputAddButton>
      );
  }
};

export default CustomButton;

// Header.jsx
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

// AddHint.jsx
const AddButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.pointcolor};
  border-radius: 20px;
  border: transparent;
  position: relative;
  cursor: pointer;
`;

// Detail.jsx
const AddButtonn = styled.button`
  height: 40px;
  padding-right: 0;
  background-color: transparent;
  border: transparent;
  color: ${(props) => props.theme.colors.pointcolor};
  position: relative;
  cursor: pointer;
`;

// HintCard.jsx
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

// Input.jsx

const InputAddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 91px;
  height: 39px;
  color: ${(props) => props.theme.colors.reversetextcolor};
  background: ${(props) => props.theme.colors.pointcolor};
  border-radius: 20px;
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const InputBackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  gap: 6px;
  width: 75px;
  height: 44px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textcolor};
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;
