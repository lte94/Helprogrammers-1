import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import { addQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(__getQuestions());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (title) {
      const newQuestion = {
        title,
        content,
        url,
        writer,
        password,
      };
      dispatch(addQuestions(newQuestion));
      setTitle('');
      setContent('');
      setUrl('');
      setWriter('');
      setPassword('');
    } else {
      alert('제목을 입력하세요');
    }
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
            <Dropdownbutton>
              <button>문제풀이 사이트</button>
              <button>사용언어</button>
            </Dropdownbutton>

            <UserBox>
              <input
                value={writer}
                onChange={onChangeInputWriter}
                type="text"
                placeholder="이름 입력"
              ></input>
              <input
                value={password}
                onChange={onChangeInputPassword}
                type="text"
                placeholder="비밀번호 입력"
              ></input>
              <button>확인</button>
            </UserBox>
          </InputBox>
          <Inputurl>
            <input
              value={url}
              onChange={onChangeInputUrl}
              type="text"
              placeholder="url을 입력해 주세요"
            />
          </Inputurl>
          <InputTitle>
            <input
              value={title}
              onChange={onChangeInputTitle}
              type="text"
              placeholder="제목을 입력해 주세요"
            />
          </InputTitle>

          <InputContent>
            <input
              value={content}
              onChange={onChangeInputContent}
              type="textarea"
              placeholder="내용을 입력해 주세요"
            />
          </InputContent>
          <BackButton
            onClick={() => {
              navigate('/');
            }}
          >
            뒤로가기
          </BackButton>
          <AddButton>작성완료</AddButton>
        </form>
      </InputBoxs>
    </Layout>
  );
};

export default Input;

const InputBoxs = styled.div`
  width: 800px;
  padding: 20px;
  height: 800px;
  border: 1px solid white;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputTitle = styled.div`
  width: 750px;
  display: grid;
  height: 50px;
`;

const InputContent = styled.div`
  width: 750px;
  display: grid;
  height: 500px;
`;

const Inputurl = styled.div`
  width: 750px;
  display: grid;
  height: 50px;
`;

const Dropdownbutton = styled.div``;

const UserBox = styled.div``;

const AddButton = styled.button`
  float: right;
`;

const BackButton = styled.button``;
