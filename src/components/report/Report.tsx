import React from 'react';

const Report = () => {
  return (
    <>
      <div>
        차트
      </div>
      <div>
        <li className="list-none">
          <ul>
            <p>평균난이도</p>
            <p>3.5 / 5</p>
          </ul>
          <ul>
            <p>정답수 / 오답수 / 문항수</p>
            <p>2 / 5</p>
          </ul>
          <ul>
            <p>내풀이시간</p>
            <p>10분 20초</p>
          </ul>
        </li>
      </div>
      <div>
        <button type="button">다시 풀기</button>
        <button type="button">오답 노트</button>
        <button type="button">닫기</button>
      </div>
    </>
  );
};

export default Report;
