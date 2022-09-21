import React from 'react';
import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { mockStartExamState, mockUseSelector } from '__mocks__/reduxMock';
import Question from 'src/components/question/Question';
import { RootState } from 'src/redux/store';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-redux');

describe('Question 컴포넌트', () => {
  beforeEach(() => {
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockStartExamState,
    }));
  });

  it('Question 컴포넌트를 호출합니다', () => {
    mockRouter.setCurrentUrl('/question?index=0');

    const { container } = render(<Question />);

    expect(container).toHaveTextContent('문제 1');
    expect(container).toHaveTextContent('1 / 5');
  });

  context('문제(지문)가 존재하지 않을 경우', () => {
    it('로딩 화면을 보여줍니다', () => {
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockStartExamState,
        exam: {
          ...mockStartExamState.exam,
          examPaper: [],
        },
      }));

      const { container } = render(<Question />);

      expect(container).toHaveTextContent('Loading...');
    });
  });

  context('문제의 답안을 선택하면', () => {
    it('정답을 확인합니다', () => {
      mockRouter.setCurrentUrl('/question?index=0');
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockStartExamState,
        user: {
          ...mockStartExamState.user,
          answerPaper: [
            { answer: 'Economics', isCorrect: true },
          ],
        },
      }));

      const { container } = render(<Question />);

      expect(container).toHaveTextContent(/오답입니다.|정답입니다./);
      expect(container).toHaveTextContent('선택한 답 2번');
      expect(container).toHaveTextContent('다음문제');
    });
  });

  context('모든 문제를 풀면', () => {
    it('결과 보기로 넘어갈 수 있습니다', () => {
      mockRouter.setCurrentUrl('/question?index=4');
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockStartExamState,
        user: {
          ...mockStartExamState.user,
          answerPaper: [
            { answer: 'Economics', isCorrect: true },
            { answer: 'Greek', isCorrect: false },
            { answer: 'China', isCorrect: false },
            { answer: 'Stephen Carl', isCorrect: false },
            { answer: 'Haruno', isCorrect: false },
          ],
        },
      }));

      const { container } = render(<Question />);

      expect(container).toHaveTextContent('결과 보기');
    });
  });
});
