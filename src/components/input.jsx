import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __addQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Input = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const selectSiteList = ['baekjoon', 'programmers', 'SW Expert Academy'];
  const [place, setPlace] = useState('');
  const handleSelectSite = (e) => {
    setPlace(e.target.value);
  };
  const selectLanguageList = ['javacript', 'python', 'c++', 'java'];
  const [language, setLanguage] = useState('');
  const handleSelectLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newQuestion = {
      title,
      content,
      url,
      writer,
      password: Number(password),
      place,
      language,
      id: uuidv4(),
    };
    if (title.replace(/ /g, '') === '') {
      alert('제목을 입력해주세요!');
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('작성자를 입력해주세요!');
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('password를 4자리 숫자로 입력해주세요!');
      return;
    } else if (content.replace(/ /g, '') === '') {
      alert('내용을 입력해주세요!');
      return;
    } else if (url.replace(/ /g, '') === '') {
      alert('url을 입력해주세요!');
      return;
    } else if (place.replace(/ /g, '') === '') {
      alert('사이트 선택을 해주세요!');
      return;
    } else if (language.replace(/ /g, '') === '') {
      alert('언어를 선택해주세요!');
      return;
    }
    if (window.confirm('작성을 완료하시겠습니까??') === true) {
      navigate('/');
    } else {
      return;
    }
    dispatch(__addQuestions(newQuestion));
    setTitle('');
    setContent('');
    setUrl('');
    setWriter('');
    setPassword('');
    setPlace('');
    setLanguage('');
  };
  const onChangeInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeInputContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeInputUrl = (e) => {
    setUrl(e.target.value);
  };
  const onChangeInputWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeInputPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Layout>
      <InputBoxs>
        <form onSubmit={onSubmitHandler}>
          <InputBox>
            <DropdownButton>
              <DropdownButtonSite onChange={handleSelectSite} value={place}>
                <option value="">사이트 선택</option>
                {selectSiteList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </DropdownButtonSite>
              <DropdownButtonLanguage
                onChange={handleSelectLanguage}
                value={language}
              >
                <option value="">언어 선택</option>
                {selectLanguageList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </DropdownButtonLanguage>
            </DropdownButton>
            <div>
              <InputNamePass
                value={writer}
                onChange={onChangeInputWriter}
                type="text"
                placeholder="이름 입력"
              />
              <InputNamePass
                value={password}
                onChange={onChangeInputPassword}
                type="Number"
                placeholder="비밀번호 입력"
              />
            </div>
          </InputBox>
          <ContentsBox>
            <InputUrl
              value={url}
              onChange={onChangeInputUrl}
              type="text"
              placeholder="url을 입력해 주세요"
            />
            <InputTitle
              value={title}
              onChange={onChangeInputTitle}
              type="text"
              placeholder="제목을 입력해 주세요"
            />
            <InputContent
              value={content}
              onChange={onChangeInputContent}
              type="text"
              placeholder="내용을 입력해 주세요"
            />
            <ButtonBox>
              <BackButton
                type="button"
                onClick={() => {
                  navigate('/');
                }}
              >
                ← 나가기
              </BackButton>
              <AddButton type="submit">작성완료</AddButton>
            </ButtonBox>
          </ContentsBox>
        </form>
      </InputBoxs>
    </Layout>
  );
};
export default Input;
const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 32px;
  position: absolute;
  height: 920px;
  left: 10%;
  right: 10%;
  bottom: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 32px;
  position: absolute;
  width: 1300px;
  height: 918px;
  left: 12%;
  right: 14.47%;
  top: 140px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.card};
  border-radius: 20px;
`;

const InputBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputTitle = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 32px;
  width: 1180px;
  height: 68px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const InputContent = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 32px;
  width: 1180px;
  height: 570px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  order: 2;
  flex-grow: 0;
  white-space: pre-wrap;
  resize: none;
`;

const InputUrl = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 32px;
  width: 1180px;
  height: 68px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DropdownButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  width: 279px;
  flex: none;
  order: 0;
  flex-grow: 0;
  /* height: -webkit-fill-available; */
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 1180px;
  height: 44px;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const AddButton = styled.button`
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

const BackButton = styled.button`
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

const InputNamePass = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  position: relative;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  margin-left: 10px;
  padding-left: 16px;
  border: none;
  &::placeholder {
    padding-left: 2px;
    color: ${(props) => props.theme.colors.placeholder};
  }
  &:focus {
    box-shadow: 3px 3px 5px #aaa;
    scale: 1.01;
  }
`;

const DropdownButtonSite = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 158px;
  height: 39px;
  color: ${(props) => props.theme.colors.textcolor};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.insidecard};
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const DropdownButtonLanguage = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 120px;
  height: 39px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  order: 1;
  flex-grow: 0;
  cursor: pointer;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1180px;
  height: 10px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
