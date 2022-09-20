/* eslint-disable max-len */
import React from 'react';

import Loading from 'src/components/common/Loading';
import ArrowLeft from 'src/components/icon/ArrowLeft';
import ArrowRight from 'src/components/icon/ArrowRight';
import DocumentBoard from 'src/components/icon/DocumentBoard';
import useQuestion from 'src/hooks/question/useQuestion';

const Question = () => {
  const {
    currentIndex, examPaper, answerPaper,
    handleClickAnswer,
    handleClickPrevMoveQuestion,
    handleClickNextMoveQuestion,
    handleClickShowReport,
  } = useQuestion();

  const quiz = examPaper[currentIndex];

  if (!quiz) {
    return (
      <Loading />
    );
  }

  const isMarkingAnswer = answerPaper.length >= currentIndex + 1;

  const isMarkingCorrect = isMarkingAnswer && answerPaper[currentIndex].isCorrect;
  const answerNumber = isMarkingAnswer && quiz.answers.findIndex((question) => question.answer === answerPaper[currentIndex].answer) + 1;
  const correctNumber = isMarkingAnswer && quiz.answers.findIndex((question) => question.isCorrect === true) + 1;

  const isPrevQuiz = currentIndex > 0;
  const isNextQuiz = answerPaper[currentIndex] && currentIndex !== examPaper.length - 1;
  const isEndQuiz = currentIndex === examPaper.length - 1 && answerPaper.length === examPaper.length;

  return (
    <>
      <div>
        <h4 className="question-number">
          {`문제 ${currentIndex + 1}`}
        </h4>
        <h2 className="question-title">
          {quiz.question}
        </h2>
      </div>
      <div>
        <li className="mb-10 list-none">
          {quiz.answers.map(({ answer }, index) => {
            return (
              <ul
                key={answer}
                className="question-answer"
              >
                {`${index + 1}. ${answer}`}
              </ul>
            );
          })}
        </li>
      </div>
      <div className="flex justify-center mb-10">
        {quiz.answers.map(({ answer }, index) => {
          return (
            <button
              key={answer}
              // eslint-disable-next-line max-len
              className={`question-select-button ${typeof answerNumber === 'number' && answerNumber - 1 === index && 'border-classting-green disabled:opacity-100'}`}
              type="button"
              value={answer}
              onClick={handleClickAnswer}
              disabled={isMarkingAnswer}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      {
        isMarkingAnswer ? (
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`question-answer-title ${isMarkingCorrect ? 'text-classting-green' : 'text-red-600'}`}>
                {`${isMarkingCorrect ? '정답' : '오답'}입니다.`}
              </h3>
            </div>
            <div className="flex">
              <p className="mr-3 question-explain-title text-classting-font-bold">
                {`선택한 답 ${answerNumber}번`}
              </p>
              <p className="question-explain-title text-classting-green">
                {`정답 ${correctNumber}번`}
              </p>
            </div>
          </div>
        ) : (
          <div className="invisible mb-2 font-sans text-2xl">
            줄바꿈
          </div>
        )
      }
      <div className="flex items-center justify-between">
        <button
          type="button"
          className={`pl-4 pr-6 question-move-button ${!isPrevQuiz && 'invisible'}`}
          onClick={handleClickPrevMoveQuestion}
        >
          <ArrowLeft />
          이전문제
        </button>
        <p className="question-page">
          {`${currentIndex + 1} / ${examPaper.length}`}
        </p>
        <button
          type="button"
          className={`pl-6 pr-4 question-move-button ${!isNextQuiz && !isEndQuiz && 'invisible'}`}
          onClick={isNextQuiz ? handleClickNextMoveQuestion : handleClickShowReport}
        >
          {`${isNextQuiz ? '다음문제' : ''}${isEndQuiz ? '결과 보기' : ''}`}
          { isNextQuiz && (<ArrowRight />)}
          { isEndQuiz && (<DocumentBoard />)}
        </button>
      </div>
    </>
  );
};

export default Question;
