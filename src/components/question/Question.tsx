import React from 'react';

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
    return (<div>Loading</div>);
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
        <h4>
          문제
          {' '}
          {currentIndex + 1}
        </h4>
        <h2>
          {quiz.question}
        </h2>
      </div>
      <div>
        <li className="list-none">
          {quiz.answers.map(({ answer }, index) => {
            return (
              <ul key={answer}>
                {index + 1}
                .
                {' '}
                {answer}
              </ul>
            );
          })}
        </li>
      </div>
      <div>
        {quiz.answers.map(({ answer }, index) => {
          return (
            <button
              key={answer}
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
        isMarkingAnswer && (
          <div>
            <h3>
              {isMarkingCorrect ? '정답' : '오답'}
              입니다.
            </h3>
            <p>
              선택한 답
              {' '}
              {answerNumber}
              번
            </p>
            <p>
              정답
              {' '}
              {correctNumber}
              번
            </p>
          </div>
        )
      }
      <div>
        {
          isPrevQuiz && (
            <button
              type="button"
              onClick={handleClickPrevMoveQuestion}
            >
              이전문제
            </button>
          )
        }
        <p>
          {currentIndex + 1}
          {' / '}
          {examPaper.length}
        </p>
        {
          isNextQuiz && (
            <button
              type="button"
              onClick={handleClickNextMoveQuestion}
            >
              다음문제
            </button>
          )
        }
        {
          isEndQuiz && (
            <button
              type="button"
              onClick={handleClickShowReport}
            >
              결과 보기
            </button>
          )
        }
      </div>
    </>
  );
};

export default Question;
