import styled from 'styled-components';
import useInput from '../hooks/useInput';
import HintCard from './HintCard';

const HintList = ({ questionHints }) => {
  const [level, levelHandleChange] = useInput();

  const highHints = questionHints?.filter((hint) => hint.level === '상');
  const middleHints = questionHints?.filter((hint) => hint.level === '중');
  const lowHints = questionHints?.filter((hint) => hint.level === '하');

  return (
    <Middle>
      <div>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="상"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>상</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="중"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>중</LevelCheckSpan>
        </LevelCheckLabel>
        <LevelCheckLabel>
          <LevelCheckRadio
            type="radio"
            name="level"
            value="하"
            onChange={levelHandleChange}
          />
          <LevelCheckSpan>하</LevelCheckSpan>
        </LevelCheckLabel>
      </div>
      {level === '상'
        ? highHints.map((hint) => <HintCard hint={hint} />)
        : level === '중'
        ? middleHints.map((hint) => <HintCard hint={hint} />)
        : level === '하'
        ? lowHints.map((hint) => <HintCard hint={hint} />)
        : null}
    </Middle>
  );
};

export default HintList;

const Middle = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  width: 1000px;
`;

const LevelCheckLabel = styled.label`
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 5px;
  position: relative;
  left: 43%;
`;
const LevelCheckSpan = styled.span`
  font-size: 18px;
  width: 36px;
  height: 36px;
  background: ${(props) => props.theme.colors.insidecard};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.placeholder};
`;

const LevelCheckRadio = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    text-align: center;
    display: none;
  }
  &:checked + ${LevelCheckSpan} {
    scale: 1.1;
    color: black;
    background-color: ${(props) =>
      props.value === '상'
        ? props.theme.colors.high
        : props.value === '중'
        ? props.theme.colors.middle
        : props.theme.colors.low};
  }
  display: none;
`;
