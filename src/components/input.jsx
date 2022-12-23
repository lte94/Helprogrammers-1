import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import { addQuestions } from '../redux/module/QuestionsSlice';
import styled from 'styled-components';

const Input = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      const newTodo = {
        title,
        content,
      };
      dispatch(addQuestions(newTodo));
      setTitle('');
      setContent('');
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

  return (
    <Layout>
      <InputBoxs>
        <form onSubmit={onSubmitHandler}>
          {/* <input type="text" placeholder="url을 입력해 주세요" /> */}
          <InputBox>
            <Dropdownbutton>
              <button>문제풀이 사이트</button>
              <button>사용언어</button>
            </Dropdownbutton>

            <UserBox>
              <input type="text" placeholder="이름 입력"></input>
              <input type="text" placeholder="비밀번호 입력"></input>
              <button>확인</button>
            </UserBox>
          </InputBox>
          <InputContextTitle>
            <input
              value={title}
              onChange={onChangeInputTitle}
              type="text"
              placeholder="제목을 입력해 주세요"
            />
          </InputContextTitle>
          <InputContextContent>
            <input
              value={content}
              onChange={onChangeInputContent}
              type="textarea"
              placeholder="내용을 입력해 주세요"
            />
          </InputContextContent>
          <button>작성완료</button>
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

const InputContextTitle = styled.div`
  display: flex;
  height: 50px;
`;

const InputContextContent = styled.div`
  display: flex;
  height: 50px;
`;

const Dropdownbutton = styled.div``;

const UserBox = styled.div``;
