import dynamic from 'next/dynamic';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';

import Loading from 'src/components/common/Loading';
import useReport from 'src/hooks/report/useReport';

const Confetti = dynamic(() => import('react-confetti'));
const ReportGraph = dynamic(() => import('src/components/report/ReportGraph'));

const Report = () => {
  const {
    correctCount, inCorrectCount, recordTime,
    isDone,
    handleClickReExam,
    handleClickReturnMain,
  } = useReport();
  const { width, height } = useWindowSize();

  if (!isDone) {
    return (<Loading />);
  }

  const percentage = (correctCount / (correctCount + inCorrectCount)) * 100;

  return (
    <div className="container mx-auto">
      {
        width && height && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={600}
            recycle={false}
          />
        )
      }
      <p className="mb-8 report-title">
        퀴즈 보고서
      </p>
      <div className="flex items-center justify-between mb-2">
        <ReportGraph
          correctCount={correctCount}
          inCorrectCount={inCorrectCount}
        />
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
