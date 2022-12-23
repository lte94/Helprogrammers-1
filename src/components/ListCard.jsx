import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListCard = ({ question }) => {
  return (
    <QuestionLink to={`/question-${question.id}`}>
      <Thread>
        <ThreadHead>
          {/* 사이트 네임 태그 */}
          <Place>{question.place}</Place>
          {/* 언어 태그 */}
          <Language>
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
  background-color: rgba(68, 69, 74, 1);
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
  background-color: ${(props) => {
    if (props.children === 'baekjoon') {
      return 'rgba(162, 255, 147, 1)';
    } else if (props.children === 'programmers') {
      return 'rgba(204, 136, 255, 1)';
    } else {
      return 'rgba(135, 255, 255, 1)';
    }
  }};

  color: black;
`;
const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
  gap: 10px;
  color: white;
  span {
    height: 12px;
    width: 12px;
    background-color: rgba(13, 240, 172, 1);
    border-radius: 50%;
  }
`;
const ThreadBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
  }
`;
