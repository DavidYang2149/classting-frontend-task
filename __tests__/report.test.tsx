/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic-ts';

import { mockShowReportState, mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import ReportPage from 'src/pages/report';
import { RootState } from 'src/redux/store';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-redux');

describe('결과화면', () => {
  const dispatch = jest.fn();

  beforeAll(async () => {
    await preloadAll();
  });

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockShowReportState,
    }));
  });

  it('결과 페이지 화면을 확인합니다', () => {
    const { container } = render(<ReportPage />);

    expect(container).toHaveTextContent('퀴즈 보고서');
    expect(container).toHaveTextContent('정답수 / 오답수 / 문항수');
    expect(container).toHaveTextContent('내풀이시간');
    expect(container).toHaveTextContent('다시 풀기');
    expect(container).toHaveTextContent('닫기');
  });
});
