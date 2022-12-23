import styled from 'styled-components';
import Input from '../components/input';

function AddQuestion() {
  const onSubmitHandler = () => {
    alert('test');
  };

  return (
    <>
      <StyleInputBox>
        <Input />
      </StyleInputBox>
    </>
  );
}

export default AddQuestion;

const StyleInputBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
