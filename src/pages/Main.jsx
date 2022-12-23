import styled from 'styled-components';

function Main() {
  return (
    <Maindiv>
      <Newsfeed>
        <Thread>
          <ThreadHead>
            {/* 사이트 네임 태그 */}
            <Sitename>Baekjoon</Sitename>
            {/* 언어 태그 */}
            <Language>javascript</Language>
          </ThreadHead>

          <h2>제목입니다</h2>
          <p>내용입니다</p>
        </Thread>
        
      </Newsfeed>
    </Maindiv>
  );
}

export default Main;

const Maindiv = styled.main`
  background-color: #252527;
  height: calc(100vh - 88px); // -88px (헤더 높이)
  display: flex;
  justify-content: center;
`;
const Newsfeed = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  min-width: 867px;
  border: 1px solid red;
`;
const Thread = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 1px solid white;
  background-color: #44454a;
  color: #fff;
`;
const ThreadHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Sitename = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 30px;
  border: 1px solid white;
  border-radius: 20px;
  `;
const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0 10px;
`;
