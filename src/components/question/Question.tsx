import React from 'react';

const Question = () => {
  return (
    <>
      <div>
        <h4>문제 4</h4>
        <h2>다음주 3대장 프론트엔드 프레임워크가 아닌 것은?</h2>
      </div>
      <div>
        <li className="list-none">
          <ul>1. 앵귤러</ul>
          <ul>2. 리액트</ul>
          <ul>3. 뷰</ul>
          <ul>4. HTML</ul>
        </li>
      </div>
      <div>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
      </div>
      <div>
        <h3>정답입니다.</h3>
        <h3>오답입니다.</h3>
        <p>선택한 답 2번</p>
        <p>정답 4번</p>
      </div>
      <div>
        <button type="button">이전문제</button>
        <p>3 / 5</p>
        <button type="button">다음문제</button>
      </div>
    </>
  );
};

export default Question;
