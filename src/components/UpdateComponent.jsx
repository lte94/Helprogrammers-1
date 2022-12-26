import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __updateDetail } from '../redux/module/DetailSlice';

const UpdateComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.detail);
  const hints = document.getElementsByTagName('section'); // 지워야 함
  console.log(question);

  const [title, setTitle] = useState(question.title);
  const [content, setContent] = useState(question.content);
  const [url, setUrl] = useState(question.url);
  const [place, setPlace] = useState(question.place);
  const [language, setLanguage] = useState(question.language);

  const selectSiteList = ['baekjoon', 'programmers', 'SW Expert Academy'];
  const selectLanguageList = ['javacript', 'python', 'c++', 'java'];

  const updateQuestion = {
    title,
    content,
    url,
    place,
    language,
  };
  const onSubmitEditor = () => {
    // event.preventDefault();
    dispatch(__updateDetail(question.id, updateQuestion));
  };

  return (
    <>
      <Layout>
        <InputBoxs>
          <form onSubmit={onSubmitEditor}>
            <DropdownButton>
              <DropdownButtonbox onChange={(e) => setPlace(e.target.value)}>
                <option value="">{place}</option>
                {selectSiteList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </DropdownButtonbox>
              <DropdownButtonbox onChange={(e) => setLanguage(e.target.value)}>
                <option value="">{language}</option>
                {selectLanguageList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </DropdownButtonbox>
            </DropdownButton>

            <ContentsBox>
              <InputTag
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                type="text"
                placeholder="url을 입력해 주세요"
              ></InputTag>
              <InputTag
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="제목을 입력해 주세요"
              />
              <InputContent
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
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
    </>
  );
};

export default UpdateComponent;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.card};
  border-radius: 20px;
`;

const InputBoxs = styled.div`
  display: flex;
  padding: 24px;
  gap: 32px;
`;

const DropdownButton = styled.div`
  display: flex;
  gap: 30px;
  width: 279px;
  padding: 15px 0;
  /* height: -webkit-fill-available; */
`;

const DropdownButtonbox = styled.select`
  padding: 10px 16px;
  width: 158px;
  height: 39px;
  color: ${(props) => props.theme.colors.textcolor};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.insidecard};
  border: none;
  cursor: pointer;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* Inside auto layout */
`;

const InputTag = styled.input`
  padding: 22px;
  width: 1000px;
  height: 68px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
`;

const InputContent = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 32px;
  width: 1000px;
  height: 300px;
  color: ${(props) => props.theme.colors.textcolor};
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 20px;
  border: none;
  white-space: pre-wrap;
  resize: none;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AddButton = styled.button`
  padding: 10px 16px;
  gap: 10px;
  width: 91px;
  height: 39px;
  color: ${(props) => props.theme.colors.reversetextcolor};
  background: ${(props) => props.theme.colors.pointcolor};
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const BackButton = styled.button`
  padding: 10px 0px;
  gap: 6px;
  width: 75px;
  height: 44px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textcolor};
  cursor: pointer;
`;
