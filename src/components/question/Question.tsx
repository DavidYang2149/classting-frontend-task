/* eslint-disable max-len */
import React from 'react';

import Loading from 'src/components/common/Loading';
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
          문제
          {' '}
          {currentIndex + 1}
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
                {index + 1}
                .
                {' '}
                {answer}
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
                {isMarkingCorrect ? '정답' : '오답'}
                입니다.
              </h3>
            </div>
            <div className="flex">
              <p className="mr-3 question-explain-title text-classting-font-bold">
                선택한 답
                {' '}
                {answerNumber}
                번
              </p>
              <p className="question-explain-title text-classting-green">
                정답
                {' '}
                {correctNumber}
                번
              </p>
            </div>
          </div>
        ) : (
          <div className="invisible mb-2 font-sans text-2xl">
            답안
          </div>
        )
      }
      <div className="flex items-center justify-between">
        {
          isPrevQuiz ? (
            <button
              type="button"
              className="pl-4 pr-6 question-move-button"
              onClick={handleClickPrevMoveQuestion}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              이전문제
            </button>
          ) : (
            <button
              type="button"
              className="invisible"
            >
              이전문제
            </button>
          )
        }
        <p className="question-page">
          {currentIndex + 1}
          {' / '}
          {examPaper.length}
        </p>
        {
          isNextQuiz && (
            <button
              type="button"
              className="pl-6 pr-4 question-move-button"
              onClick={handleClickNextMoveQuestion}
            >
              다음문제
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pl-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )
        }
        {
          isEndQuiz && (
            <button
              type="button"
              className="pl-6 pr-4 question-move-button"
              onClick={handleClickShowReport}
            >
              결과 보기
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pl-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </button>
          )
        }
        {
          !isNextQuiz && !isEndQuiz && (
            <button
              type="button"
              className="invisible"
            >
              다음문제
            </button>
          )
        }
      </div>
    </>
  );
};

export default Question;
