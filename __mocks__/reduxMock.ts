import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/redux/store';

const mockRootState: RootState = {
  exam: {
    isLoading: false,
    examPaper: [],
  },
  user: {
    isLoading: false,
    answerPaper: [],
    reportPaper: {
      beginTime: 0,
      finishTime: 0,
    },
  },
};

export const mockStartExamState: RootState = {
  exam: {
    isLoading: false,
    examPaper: [
      {
        category: 'General Knowledge',
        type: 'multiple',
        difficulty: 'medium',
        question: 'This field is sometimes known as “The Dismal Science.”',
        answers: [
          { answer: 'Physics', isCorrect: false },
          { answer: 'Economics', isCorrect: true },
          { answer: 'Politics', isCorrect: false },
          { answer: 'Philosophy', isCorrect: false },
        ],
      },
      {
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'hard',
        question: 'Nidhogg is a mythical creature from what mythology?',
        answers: [
          { answer: 'Norse', isCorrect: true },
          { answer: 'Hindu', isCorrect: false },
          { answer: 'Greek', isCorrect: false },
          { answer: 'Egyptian', isCorrect: false },
        ],
      },
      {
        category: 'Geography',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which country is the home of the largest Japanese population outside of Japan?',
        answers: [
          { answer: 'Russia', isCorrect: false },
          { answer: 'Brazil', isCorrect: true },
          { answer: 'China', isCorrect: false },
          { answer: 'The United States', isCorrect: false },
        ],
      },
      {
        category: 'Entertainment: Television',
        type: 'multiple',
        difficulty: 'medium',
        question: 'In the television show "Lazy Town", who is the actor of Robbie Rotten?',
        answers: [
          { answer: 'Magnús Scheving', isCorrect: false },
          { answer: 'Adam Sandler', isCorrect: false },
          { answer: 'Stefán Stefánsson', isCorrect: true },
          { answer: 'Stephen Carl', isCorrect: false },
        ],
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        type: 'multiple',
        difficulty: 'easy',
        question: 'In the Naruto manga, what is the last name of Tsunade?',
        answers: [
          { answer: 'Yamanaka', isCorrect: false },
          { answer: 'Haruno', isCorrect: false },
          { answer: 'Uzumaki', isCorrect: false },
          { answer: 'Senju', isCorrect: true },
        ],
      },
    ],
  },
  user: {
    isLoading: false,
    answerPaper: [],
    reportPaper: {
      beginTime: 1663758176796,
      finishTime: 0,
    },
  },
};

export const mockShowReportState: RootState = {
  exam: {
    isLoading: false,
    examPaper: [
      {
        category: 'General Knowledge',
        type: 'multiple',
        difficulty: 'medium',
        question: 'This field is sometimes known as “The Dismal Science.”',
        answers: [
          { answer: 'Physics', isCorrect: false },
          { answer: 'Economics', isCorrect: true },
          { answer: 'Politics', isCorrect: false },
          { answer: 'Philosophy', isCorrect: false },
        ],
      },
      {
        category: 'Mythology',
        type: 'multiple',
        difficulty: 'hard',
        question: 'Nidhogg is a mythical creature from what mythology?',
        answers: [
          { answer: 'Norse', isCorrect: true },
          { answer: 'Hindu', isCorrect: false },
          { answer: 'Greek', isCorrect: false },
          { answer: 'Egyptian', isCorrect: false },
        ],
      },
      {
        category: 'Geography',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which country is the home of the largest Japanese population outside of Japan?',
        answers: [
          { answer: 'Russia', isCorrect: false },
          { answer: 'Brazil', isCorrect: true },
          { answer: 'China', isCorrect: false },
          { answer: 'The United States', isCorrect: false },
        ],
      },
      {
        category: 'Entertainment: Television',
        type: 'multiple',
        difficulty: 'medium',
        question: 'In the television show "Lazy Town", who is the actor of Robbie Rotten?',
        answers: [
          { answer: 'Magnús Scheving', isCorrect: false },
          { answer: 'Adam Sandler', isCorrect: false },
          { answer: 'Stefán Stefánsson', isCorrect: true },
          { answer: 'Stephen Carl', isCorrect: false },
        ],
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        type: 'multiple',
        difficulty: 'easy',
        question: 'In the Naruto manga, what is the last name of Tsunade?',
        answers: [
          { answer: 'Yamanaka', isCorrect: false },
          { answer: 'Haruno', isCorrect: false },
          { answer: 'Uzumaki', isCorrect: false },
          { answer: 'Senju', isCorrect: true },
        ],
      },
    ],
  },
  user: {
    isLoading: false,
    answerPaper: [
      { answer: 'Economics', isCorrect: true },
      { answer: 'Greek', isCorrect: false },
      { answer: 'China', isCorrect: false },
      { answer: 'Stephen Carl', isCorrect: false },
      { answer: 'Haruno', isCorrect: false },
    ],
    reportPaper: {
      beginTime: 1663758176796,
      finishTime: 1663758186969,
    },
  },
};

export const mockUseDispatch = useDispatch as jest.Mock;
export const mockUseSelector = useSelector as jest.Mock;

export default mockRootState;
