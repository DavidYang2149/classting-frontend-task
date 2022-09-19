import React from 'react';

import useReport from 'src/hooks/report/useReport';

const Report = () => {
  const {
    correctCount, inCorrectCount, recordTime,
    isDone,
    handleClickReExam,
    handleClickReturnMain,
  } = useReport();

  if (!isDone) {
    return (<div>Loading</div>);
  }

  return (
    <>
      <div>
        차트
      </div>
      <div>
        <li className="list-none">
          <ul>
            <p>정답수 / 오답수 / 문항수</p>
            <p>
              {correctCount}
              {' '}
              /
              {' '}
              {inCorrectCount}
              {' '}
              /
              {' '}
              {correctCount + inCorrectCount}
            </p>
          </ul>
          <ul>
            <p>내풀이시간</p>
            <p>{recordTime}</p>
          </ul>
        </li>
      </div>
      <div>
        <button type="button" onClick={handleClickReExam}>다시 풀기</button>
        <button type="button" onClick={handleClickReturnMain}>닫기</button>
      </div>
    </>
  );
};

export default Report;
