import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getQuestions } from '../redux/module/QuestionsSlice';
import { addQuestions } from '../redux/module/QuestionsSlice';

const Input = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

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
        contents,
      };
      dispatch(addQuestions(newTodo));
      setTitle('');
      setContents('');
    } else {
      alert('제목을 입력하세요');
    }
  };

  const onChangeInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeInputContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {/* <input type="text" placeholder="url을 입력해 주세요" /> */}
      <input
        value={title}
        onChange={onChangeInputTitle}
        type="text"
        placeholder="제목을 입력해 주세요"
      />
      <input
        value={contents}
        onChange={onChangeInputContents}
        type="text"
        placeholder="내용을 입력해 주세요"
      />
      <button>작성완료</button>
    </form>
  );
};

export default Input;
