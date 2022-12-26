import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListCard = ({ question }) => {
  const { hellMode } = useSelector((state) => state.theme);

  return (
    <QuestionLink to={`/${question.id}`}>
      <Thread>
        <ThreadHead>
          {/* 사이트 네임 태그 */}
          <Place>{question.place}</Place>
          {/* 언어 태그 */}
          <Language hellMode={hellMode}>
            <span className="dot" />
            {question.language}
          </Language>
        </ThreadHead>
        <ThreadBody>
          <h2>{question.title}</h2>
          <p>{question.content}</p>
        </ThreadBody>
      </Thread>
    </QuestionLink>
  );
};

export default ListCard;

//styled-components

const QuestionLink = styled(Link)`
  text-decoration: none;
`;

const Thread = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 216px;
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.card};
`;
const ThreadHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Place = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.children === 'baekjoon'
      ? props.theme.colors.baekjoon
      : props.children === 'programmers'
      ? props.theme.colors.programmers
      : props.theme.colors.swexpert};
  color: black;
`;
const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
  gap: 10px;
  color: ${(props) => (props.hellMode === true ? '#FF2525' : '#FFFFFF')};
  span {
    height: 12px;
    width: 12px;
    background-color: ${(props) => props.theme.colors.pointcolor};
    border-radius: 50%;
  }
`;
const ThreadBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${(props) => props.theme.colors.textcolor};
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`;
