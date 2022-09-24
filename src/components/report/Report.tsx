import React from 'react';
import { VictoryPie } from 'victory';

import Loading from 'src/components/common/Loading';
import useReport from 'src/hooks/report/useReport';

const Report = () => {
  const {
    correctCount, inCorrectCount, recordTime,
    isDone,
    handleClickReExam,
    handleClickReturnMain,
  } = useReport();

  if (!isDone) {
    return (<Loading />);
  }

  const percentage = (correctCount / (correctCount + inCorrectCount)) * 100;

  return (
    <div className="container mx-auto">
      <p className="mb-8 report-title">
        퀴즈 보고서
      </p>
      <div className="flex items-center justify-between mb-2">
        <svg className="mx-auto" width={300} height={300}>
          <VictoryPie
            standalone={false}
            colorScale={['tomato', 'gray']}
            animate={{
              duration: 100,
            }}
            innerRadius={75}
            width={300}
            height={300}
            data={[
              { x: `정답: ${correctCount}`, y: correctCount },
              { x: `오답: ${inCorrectCount}`, y: inCorrectCount },
            ]}
          />
        </svg>

      </div>
      <div className="flex items-center justify-between mb-2">
        <p className="report-explain-title">
          정답수 / 오답수 / 문항수
        </p>
        <p className="report-explain-title">
          {`${correctCount} / ${inCorrectCount} / ${correctCount + inCorrectCount}`}
        </p>
      </div>
      <div className="mb-8 report-progress-bar-outer">
        <div
          className="report-progress-bar-inner"
          style={{ width: `${percentage}%` }}
        >
          {percentage}
          %
        </div>
      </div>
      <div className="flex items-center justify-between px-6 mb-8">
        <p className="report-explain-title">
          내풀이시간
        </p>
        <p className="report-explain-title">
          {recordTime}
        </p>
      </div>
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          className="report-move-button"
          onClick={handleClickReExam}
        >
          다시 풀기
        </button>
        <button
          type="button"
          className="report-move-button"
          onClick={handleClickReturnMain}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Report;
