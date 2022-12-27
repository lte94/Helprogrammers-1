import React from 'react';
import { useState, useRef, Children } from 'react';
import { useDispatch } from 'react-redux';
import { __addQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import InputMarkDown from './InputMarkDown';
import CustomButton from './CustomButton';

const Input = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [place, setPlace] = useState('');

  const focusWriter = useRef();
  const focusPassword = useRef();
  const focusTitle = useRef();
  const focusContent = useRef();
  const focusUrl = useRef();
  const focusPlace = useRef();
  const focusLanguage = useRef();

  const selectSiteList = ['baekjoon', 'programmers', 'SW Expert Academy'];
  const selectLanguageList = ['javacript', 'python', 'c++', 'java'];
  const handleSelectLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const handleSelectSite = (e) => {
    setPlace(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let reg_url =
      /^(https?:\/\/)?([a-z\d\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;

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
    if (place.replace(/ /g, '') === '') {
      alert('사이트 선택을 해주세요!');
      focusPlace.current.focus();
      return;
    } else if (language.replace(/ /g, '') === '') {
      alert('언어를 선택해주세요!');
      focusLanguage.current.focus();
      return;
    } else if (writer.replace(/ /g, '') === '') {
      alert('이름을 입력해주세요!');
      focusWriter.current.focus();
      return;
    } else if (password.replace(/ /g, '') === '' || password.length !== 4) {
      alert('비밀번호를 4자리 숫자로 입력해주세요!');
      focusPassword.current.focus();
      return;
    } else if (url.replace(/ /g, '') === '') {
      alert('url을 입력해주세요!');
      focusUrl.current.focus();
      return;
    } else if (!reg_url.test(url)) {
      alert('URL 형식에 맞게 입력해주세요!');
      return;
    } else if (title.replace(/ /g, '') === '') {
      alert('제목을 입력해주세요!');
      focusTitle.current.focus();
      return;
    } else if (content.replace(/ /g, '') === '') {
      alert('내용을 입력해주세요!');
      focusContent.current.focus();
      return;
    }
    if (window.confirm('작성을 완료하시겠습니까??') === true) {
      dispatch(__addQuestions(newQuestion));
      navigate('/');
    } else {
      return;
    }
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
      <Inputform onSubmit={onSubmitHandler}>
        <InputBox>
          <InputButtons>
            <DropdownButton
              onChange={handleSelectSite}
              value={place}
              ref={focusPlace}
            >
              <option value="">사이트 선택</option>
              {selectSiteList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </DropdownButton>
            <DropdownButton
              onChange={handleSelectLanguage}
              value={language}
              ref={focusLanguage}
            >
              <option value="">언어 선택</option>
              {selectLanguageList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </DropdownButton>
          </InputButtons>
          <InputButtons>
            <InputNamePass
              value={writer}
              onChange={onChangeInputWriter}
              ref={focusWriter}
              type="text"
              placeholder="이름 입력"
            />
            <InputNamePass
              value={password}
              onChange={onChangeInputPassword}
              ref={focusPassword}
              type="Number"
              placeholder="비밀번호 입력"
            />
          </InputButtons>
        </InputBox>
        <ContentsBox>
          <InputUrl
            value={url}
            onChange={onChangeInputUrl}
            ref={focusUrl}
            type="text"
            placeholder="url을 입력해 주세요"
          />
          <InputTitle
            value={title}
            onChange={onChangeInputTitle}
            ref={focusTitle}
            type="text"
            placeholder="제목을 입력해 주세요"
          />
          <InputContent>
            <ContentTextArea
              value={content}
              onChange={onChangeInputContent}
              ref={focusContent}
              type="text"
              placeholder="내용을 입력해 주세요!&#13;&#10;.&#13;&#10;[마크다운 에디터 사용법]&#13;&#10;1. 엔터를 두번 치면 줄바꿈이 됩니다.&#13;&#10;2. 코드의 처음과 끝에 ~~~를 입력하면 코드 창으로 바뀝니다.&#13;&#10;3. ~~~ 옆에 개발 언어를 입력하면 자동으로 하이라이팅 됩니다.&#13;&#10;.&#13;&#10;Ex)&#13;&#10;~~~javascript&#13;&#10;여기에 코드를 입력하세요.&#13;&#10;~~~"
            />
            <InputMarkDown
              language={language}
              content={content}
            ></InputMarkDown>
          </InputContent>
          <ButtonBox>
            <CustomButton
              name="InputBackButton"
              navigate={() => {
                navigate('/');
              }}
            >
              {Children}
            </CustomButton>
            <CustomButton name="InputAddButton">{Children}</CustomButton>
          </ButtonBox>
        </ContentsBox>
      </Inputform>
    </Layout>
  );
};
export default Input;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Inputform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  width: 1228px;
  height: 918px;
  padding: 24px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.card};
`;

const InputBox = styled.div`
  height: fit-content;
  width: 100%;
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
  width: 100%;
  height: 68px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  flex-grow: 0;
  :focus {
    outline: none;
    box-shadow: 0 0 8px 1px ${(props) => props.theme.colors.pointcolor};
  }
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 570px;
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

const InputUrl = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 32px;
  width: 100%;
  height: 68px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  flex: none;
  flex-grow: 0;
  :focus {
    outline: none;
    box-shadow: 0 0 8px 1px ${(props) => props.theme.colors.pointcolor};
  }
`;

const InputButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 100%;
  height: 44px;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const InputNamePass = styled.input`
  width: 190px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  position: relative;
  border: none;
  color: ${(props) => props.theme.colors.textcolor};
  padding-left: 16px;
  border: none;
  &::placeholder {
    padding-left: 2px;
    color: ${(props) => props.theme.colors.placeholder};
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 8px 1px ${(props) => props.theme.colors.pointcolor};
  }
`;

const DropdownButton = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px 0px;
  width: 158px;
  height: 39px;
  color: ${(props) => props.theme.colors.pointcolor};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.insidecard};
  border: none;
  flex: none;
  flex-grow: 0;
  outline: none;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: 0 0 8px 1px ${(props) => props.theme.colors.pointcolor};
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: fit-content;
  flex-grow: 0;
`;
