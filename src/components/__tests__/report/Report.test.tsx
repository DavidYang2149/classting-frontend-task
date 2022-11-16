import React from 'react';
import { render } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic-ts';

import { mockShowReportState, mockUseSelector } from '__mocks__/reduxMock';
import Report from 'src/components/report/Report';
import { RootState } from 'src/redux/store';

jest.mock('react-redux');

describe('Report 컴포넌트', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  beforeEach(() => {
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockShowReportState,
    }));
  });

  it('Report 컴포넌트를 호출합니다', () => {
    const { container } = render(<Report />);

    expect(container).toHaveTextContent('퀴즈 보고서');
    expect(container).toHaveTextContent('정답수 / 오답수 / 문항수');
    expect(container).toHaveTextContent('내풀이시간');
    expect(container).toHaveTextContent('다시 풀기');
    expect(container).toHaveTextContent('닫기');
  });

  context('문제를 풀지 않고 결과 컴포넌트에 접근하려고 하면', () => {
    it('로딩 화면을 보여줍니다', () => {
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockShowReportState,
        user: {
          ...mockShowReportState.user,
          answerPaper: [],
        },
      }));

      const { container } = render(<Report />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
