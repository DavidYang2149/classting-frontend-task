/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import mockRootState, { mockStartExamState, mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import QuestionPage from 'src/pages/question';
import { RootState } from 'src/redux/store';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-redux');

describe('문제화면', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockStartExamState,
    }));
  });

  it('문제 페이지 화면을 확인합니다', () => {
    const { container } = render(<QuestionPage />);

    expect(container).toHaveTextContent(/Classting Quiz/i);
    expect(container).toHaveTextContent('문제 1');
    expect(container).toHaveTextContent('1 / 5');
  });

  context('문제(지문)가 존재하지 않을 경우', () => {
    it('로딩 화면을 보여줍니다', () => {
      mockRouter.setCurrentUrl('/question');
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockRootState,
      }));

      const { container } = render(<QuestionPage />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
