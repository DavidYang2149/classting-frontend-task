import { IAnswer, IApiQuestion, IApiQuestions } from 'src/types/quiz';

/**
 * shuffleQuestion 함수
 * 균일한 빈도수를 위해 피셔-예이츠 셔플(Fisher-Yates shuffle) 사용
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
const shuffleQuestion = (answers: IAnswer[]) => {
  const array = [...answers];

  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const parseQuestion = (data: IApiQuestion) => {
  return {
    category: data.category,
    type: data.type,
    difficulty: data.difficulty,
    question: data.question,
    answers: shuffleQuestion([
      { answer: data.correct_answer, isCorrect: true },
      ...data.incorrect_answers.map((answer) => {
        return { answer, isCorrect: false };
      }),
    ]),
  };
};

const parseQuestions = (data: IApiQuestions) => {
  return [...data.results.map((question) => {
    return parseQuestion(question);
  })];
};

export default parseQuestions;
